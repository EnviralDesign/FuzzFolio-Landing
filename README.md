# FuzzFolio Landing

A small, dependency-free holding site for FuzzFolio while the next product iteration is in private development.

## Local preview

From the repository root:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Docker

```bash
docker build -t fuzzfolio-landing .
docker run --rm -p 8080:80 fuzzfolio-landing
```

Pushes to `main` publish `ghcr.io/enviraldesign/fuzzfolio-landing:latest` and an
immutable `sha-*` tag through GitHub Actions. Tags beginning with `v` also publish
a matching release tag.

An Unraid Docker template is available at
`unraid/fuzzfolio-landing.xml`. It exposes the site on host port `8787` by default.

The contact form has no server dependency. It opens the visitor's email client with a pre-filled access request addressed to `support@fuzzfolio.com`.
