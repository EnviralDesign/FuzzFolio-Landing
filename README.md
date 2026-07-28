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

The contact form has no server dependency. It opens the visitor's email client with a pre-filled access request addressed to `support@fuzzfolio.com`.
