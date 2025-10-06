---
title: 'راهنمای فونت وزیرحرف وریبل یا متغیر (Variable)'
date: '2022-04-18T09:41:38Z'
author:
  - Saber Rastikerdar
  - Nad Alaba
---

## فونت متغیر چیست؟

فونت متغیر نسخه تکامل یافته فونت‌های معمولی (اوپن‌تایپ) است که می‌تواند حالت‌‌های مختلف یک تایپ‌فیس را درون یک فایل جای دهد و کاربر تنها از یک فایل به جای استفاده از فایل‌های مختلف به ازای هر حالت استفاده می‌کند. برای مثال یک فونت وریبل می‌تواند وزن‌های معمولی و ضخیم، حالت ایتالیک، فشرده، عریض و ... را یکجا شامل گردد. در حالی که به روال سابق ما مجبور بودیم چندین فایل را برای بهره‌مندی از این حالات به کار بگیریم.

## فایل‌های فونت وزیرحرف متغیر

نسخه‌های مختلف متغیر وزیرحرف در آدرس‌های زیر قرار دارند:

### نسخه معمولی:
- `fonts/variable/Vazirharf[wght].ttf`
- `fonts/webfonts/Vazirharf[wght].woff2`

### نسخه نقطه‌گرد:
- `Round-Dots/fonts/variable/Vazirharf-RD[wght].ttf`
- `Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2`

### نسخه بدون لاتین:
- `misc/Non-Latin/fonts/variable/Vazirharf-NL[wght].ttf`
- `misc/Non-Latin/fonts/webfonts/Vazirharf-NL[wght].woff2`

هر کدام از این فایل‌ها تمامی وزن‌های وزیرحرف را یکجا شامل می‌شوند.

## نحوه استفاده از فونت وزیرحرفِ متغیر در وب

برای تعریف فونت در CSS:
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

برای نسخه نقطه گرد:
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

می‌توانید به جای آدرس‌های محلی از CDN استفاده کنید مانند:
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

هر چند که در آدرس ریشه، فایل `Vazirharf-Variable-font-face.css` برای استفاده از نسخه وب قرار داده شده است که می‌توانید آن را مستقیما و یا از طریق CDN فرا بخوانید:
```html
<link href="https://cdn.jsdelivr.net/gh/nadalaba/vazirharf@v34.000/Vazirharf-Variable-font-face.css" rel="stylesheet" type="text/css" />
```

در نظر داشته باشید که همیشه از آخرین نسخه به جای عدد ورژن v34.000 استفاده کنید.


نحوه استفاده در css بدین صورت است:
```css
body {
    font-family: Vazirharf;
    font-weight: 400;
}

h1 {
    font-weight: 900;
}
```
از هر عددی بین 100 تا 900 می‌توان برای تغییر وزن استفاده کرد. مثلا 692.

یا از پارامتر wght استفاده کنید:
```css
body {
    font-family: Vazirharf;
    font-variation-settings: "wght" 400;
}

h1 {
    font-variation-settings: "wght" 900;
}
```
در وزیرحرف، پارامتر `wght` برای تغییر وزن فونت تعریف شده است. در این کد به جای 900 هر عددی از 100 تا 900 قابل استفاده می‌باشد. مثلا 627.

## نحوه استفاده از فونت وزیرحرفِ متغیر در برنامه‌های گوناگون

به این [صفحه](https://nadalaba.github.io/vazirharf/fa/docs/HELP-fa) مراجعه نمایید.
