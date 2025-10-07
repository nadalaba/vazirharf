---
title: 'دليل النسخة المتغيرة من خط وزیرحرف'
date: '2022-04-18T09:41:38Z'
author:
  - Saber Rastikerdar
  - Nad Alaba
---

## ما هو الخط المتغير؟

الخط المتغير هو نسخة متقدمة من خطوط (OpenType) التقليدية، حيث يمكنه احتواء أنماط متعددة من الخطوط داخل ملف واحد فقط. هذا يتيح للمستخدم استخدام ملف واحد بدلاً من ملفات متعددة لكل نمط. على سبيل المثال، يمكن أن يتضمن الخط المتغير الأوزان العادية والعريضة، والنمط المائل، والمضغوط، والممتد، وغيرها، كلها في ملف واحد. بينما في السابق كنا نحتاج إلى استخدام عدة ملفات للوصول إلى هذه الأنماط.

## ملفات الخط المتغير لوزیرحرف

تتوفر نسخ مختلفة من خط وزیرحرف المتغير في المسارات التالية:

### النسخة العادية:
- `fonts/variable/Vazirharf[wght].ttf`
- `fonts/webfonts/Vazirharf[wght].woff2`

### نسخة النقاط الدائرية:
- `Round-Dots/fonts/variable/Vazirharf-RD[wght].ttf`
- `Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2`

### النسخة بدون حروف لاتينية:
- `misc/Non-Latin/fonts/variable/Vazirharf-NL[wght].ttf`
- `misc/Non-Latin/fonts/webfonts/Vazirharf-NL[wght].woff2`

كل من هذه الملفات يحتوي على جميع أوزان خط وزیرحرف في حزمة واحدة.

## كيفية استخدام خط وزیرحرف المتغير على الويب

لتعريف الخط في CSS:
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

لنسخة النقاط الدائرية:
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

يمكن أيضًا استخدام CDN بدلاً من المسارات المحلية، مثل:
```css
@font-face {
  font-family: 'Vazirharf RD';
  src: url('https://cdn.jsdelivr.net/gh/NadAlaba/vazirharf@v34.000/Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2') format('woff2 supports variations'),
       url('https://cdn.jsdelivr.net/gh/NadAlaba/vazirharf@v34.000/Round-Dots/fonts/webfonts/Vazirharf-RD[wght].woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

بالإضافة إلى ذلك، يوجد في المجلد الأساسي ملف باسم `Vazirharf-Variable-font-face.css` مخصص للاستخدام على الويب، ويمكن تضمينه مباشرة أو عبر CDN:
```html
<link href="https://cdn.jsdelivr.net/gh/NadAlaba/vazirharf@v34.000/Vazirharf-Variable-font-face.css" rel="stylesheet" type="text/css" />
```
ملاحظة: يُفضل دائمًا استخدام أحدث إصدار بدلاً من رقم الإصدار الثابت v34.000.

الاستخدام في CSS يكون كالتالي:
```css
body {
    font-family: Vazirharf;
    font-weight: 400;
}

h1 {
    font-weight: 900;
}
```
يمكن استخدام أي رقم بين 100 و900 لتغيير الوزن، مثل 692.

أو استخدام معامل `wght`:
```css
body {
    font-family: Vazirharf;
    font-variation-settings: "wght" 400;
}

h1 {
    font-variation-settings: "wght" 900;
}
```
في خط وزیرحرف، تم تعريف معامل `wght` للتحكم في وزن الخط. يمكن استخدام أي قيمة بين 100 و900، مثل 627.

## كيفية استخدام خط وزیرحرف المتغير في التطبيقات المختلفة

يرجى زيارة هذه [الصفحة](https://NadAlaba.github.io/vazirharf/ar/docs/HELP-ar) للحصول على الإرشادات.
