# Generates responsive derivatives for media images.
# Requirements (any one):
# - ImageMagick `magick` on PATH (preferred, produces .webp + .png)
# - Otherwise, falls back to .NET's System.Drawing to write .png only (Windows).

param(
  # Default: full rebuild (nuke + regenerate). Use -Clean:$false for incremental.
  [switch]$Clean = $true,
  [ValidateSet('webp','png','both')][string]$Format = 'webp'
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$images = @{
  dashboard   = 'dashboard.png'
  builder     = 'builder.png'
  backtesting = 'backtesting.png'
}

$widthsDashboard = @(640,960,1280,1920)
$widthsHalf      = @(320,640,960,1280)

$outRoot = Join-Path $root 'derivs'
New-Item -ItemType Directory -Force -Path $outRoot | Out-Null

function Remove-OldDerivatives {
  if (Test-Path $outRoot) { Remove-Item -Recurse -Force $outRoot }
  New-Item -ItemType Directory -Force -Path $outRoot | Out-Null
}

if ($Clean) { Remove-OldDerivatives } else { New-Item -ItemType Directory -Force -Path $outRoot | Out-Null }

$magick = Get-Command magick -ErrorAction SilentlyContinue

function New-Set {
  param($name, $src, $widths)
  if (!(Test-Path $src)) { Write-Warning "Missing source: $src"; return }
  $outDir = Join-Path $outRoot $name
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null
  if ($magick) {
    foreach ($w in $widths) {
      if ($Format -in @('webp','both')) {
        & $magick $src -filter Lanczos -resize "${w}x" -strip -quality 86 (Join-Path $outDir "$w.webp") | Out-Null
      }
      if ($Format -in @('png','both')) {
        & $magick $src -filter Lanczos -resize "${w}x" -strip -quality 92 (Join-Path $outDir "$w.png")  | Out-Null
      }
    }
  } else {
    # Fallback: PNG only via System.Drawing
    if ($Format -eq 'webp') { Write-Warning 'magick not found; generating PNG derivatives instead.' }
    Add-Type -AssemblyName System.Drawing
    foreach ($w in $widths) {
      $img = [System.Drawing.Image]::FromFile($src)
      $h = [int]([double]$img.Height * ($w / [double]$img.Width))
      $bmp = New-Object System.Drawing.Bitmap $w, $h
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
      $g.DrawImage($img, 0, 0, $w, $h)
      $out = Join-Path $outDir "$w.png"
      $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
      $g.Dispose(); $bmp.Dispose(); $img.Dispose()
    }
  }
}

New-Set -name 'dashboard'   -src $images.dashboard   -widths $widthsDashboard
New-Set -name 'builder'     -src $images.builder     -widths $widthsHalf
New-Set -name 'backtesting' -src $images.backtesting -widths $widthsHalf

Write-Host "Done. Generated derivatives in $outRoot" -ForegroundColor Green
