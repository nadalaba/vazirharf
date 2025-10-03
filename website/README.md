# Next.js source code for Vazirharf website

For learning Next.js SSG, Multilanguage website, GitHub actions, ...

## Install `pnpm`

```shell
npm install -g pnpm
```
## Install dependencies

```shell
pnpm i
```

## Run

```shell
pnpm dev
```

Open url [http://localhost:3000/vazirharf](http://localhost:3000/vazirharf)

## Evironmental variables

Use this value from shell or a create a local file named `.env.local` in the root of website folder.

```shell
NEXT_PUBLIC_LAST_TAG_NAME= # e.g. 34.000
NEXT_PUBLIC_CDN_URL= # base folder including vazirharf css files (Vazirharf-font-face.css, ...). e.g. "https://cdn.jsdelivr.net/gh/nadalaba/vazirharf@v34.000/"
NEXT_PUBLIC_BASE_PATH="/vazirharf" # will be http://localhost:3000/vazirharf
```

## Translation
Translation files are available in `src/locales`.

License: MIT
