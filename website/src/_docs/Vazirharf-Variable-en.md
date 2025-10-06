---
title: 'Guide to the Variable Version of Vazirharf Font'
date: '2022-04-18T09:41:38Z'
author:
  - Saber Rastikerdar
  - Nad Alaba
---

## What is a variable font?

A variable font is an advanced version of traditional (OpenType) fonts that can contain multiple styles of a typeface within a single file. This allows the user to use just one file instead of separate files for each style. For example, a variable font can include regular and bold weights, italic, condensed, expanded styles, etc., all in one file. Previously, we had to use multiple files to access these styles.

## Variable font files of Vazirharf

Different variable versions of Vazirharf are available at the following paths:

### Regular Version:
- `fonts/variable/Vazirharf[wght].ttf`
- `fonts/webfonts/Vazirharf[wght].woff2`

### Round Dots Version:
- `Round-Dots/fonts/variable/Vazirharf-RD[wght].ttf`
- `Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2`

### Non-Latin Version:
- `misc/Non-Latin/fonts/variable/Vazirharf-NL[wght].ttf`
- `misc/Non-Latin/fonts/webfonts/Vazirharf-NL[wght].woff2`

Each of these files includes all weights of Vazirharf in one package.

## How to Use the Variable Vazirharf font on the Web

To define the font in CSS:
```css
@font-face {
  font-family: 'Vazirharf';
  src: url('fonts/webfonts/Vazirharf[wght].woff2') format('woff2 supports variations'),
       url('fonts/webfonts/Vazirharf[wght].woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

For the round dots version:
```css
@font-face {
  font-family: 'Vazirharf RD';
  src: url('Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2') format('woff2 supports variations'),
       url('Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

You can also use a CDN instead of local paths, like this:
```css
@font-face {
  font-family: 'Vazirharf RD';
  src: url('https://cdn.jsdelivr.net/gh/nadalaba/vazirharf@v34.000/Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2') format('woff2 supports variations'),
       url('https://cdn.jsdelivr.net/gh/nadalaba/vazirharf@v34.000/Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

Additionally, in the root directory, a file named `Vazirharf-Variable-font-face.css` is provided for web usage. You can include it directly or via CDN:
```html
<link href="https://cdn.jsdelivr.net/gh/nadalaba/vazirharf@v34.000/Vazirharf-Variable-font-face.css" rel="stylesheet" type="text/css" />
```
Note: Always use the latest version instead of the fixed version number v34.000.

Usage in CSS looks like this:
```css
body {
    font-family: Vazirharf;
    font-weight: 400;
}

h1 {
    font-weight: 900;
}
```
You can use any number between 100 and 900 to adjust the weight, e.g., 692.

Or use the `wght` parameter:
```css
body {
    font-family: Vazirharf;
    font-variation-settings: "wght" 400;
}

h1 {
    font-variation-settings: "wght" 900;
}
```
In Vazirharf, the `wght` parameter is defined to control font weight. You can use any value between 100 and 900, such as 627.

## How to Use the variable Vazirharf font in Various Applications

Visit this [page](https://nadalaba.github.io/vazirharf/en/docs/HELP-en) for guidance.
