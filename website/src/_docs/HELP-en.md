---
title: 'Vazirharf Font Guide – Q&A'
date: '2025-10-15T17:00:57Z'
author:
  - Saber Rastikerdar
  - Nad Alaba
---

### What is the license for using the Vazirharf font?

Vazirharf, like its original project Vazirmatn, is released under the OFL version 1.1 license. Anyone can use this font for any purpose.

### What is the official page address for Vazirharf?

Currently, the official page is:  
[https://nadalaba.github.io/vazirharf](https://nadalaba.github.io/vazirharf)

### Why was the name changed from Vazirmatn to Vazirharf?

The name change to Vazirharf was made to avoid confusion with the original font, which was widely distributed via package managers but is no longer being updated. The name Vazirharf reflects both continuity and evolution:
- "Vazir": Preserves the legacy of the original font.
- "Harf": Means "letter" or "character", indicating a shift from single-glyph combinations to letter-based compositions.

### What is the difference between Vazirharf and Vazirmatn?

The main difference is that Vazirharf splits the "Lam-Alef" combination into two separate glyphs using contextual substitution and the 'rclt' feature, whereas Vazirmatn uses 'liga' and 'rlig' features for these combinations.

### Who Should Use Vazirharf?

Use **Vazirharf**:
- If you are in a situation where you need to disable ligatures (because you want feedback for each character you type), but you still want the original visual appearance of Lam-Alef ligatures.
Common scenarios where this might happen is on typing platforms that do not use an input box e.g, [monkeytype](https://monkeytype.com).
- If you require ongoing updates and support.

### Is Vazirmatn the same as Vazir?

Starting from version 32, the Vazir font was renamed to Vazirmatn.

### What are the differences between Vazirmatn and Vazir?

In Vazirmatn, font sizes—especially bold styles—have been increased. The weights were rebuilt with a new approach (revised thickness, contrast, and spacing). New weights were added. Many symbols were added, and some previous digits, letters, and symbols were redesigned. The font’s development method changed, scripts were rewritten, folder and file structures were completely revamped to be simpler and more readable. Naming conventions for variant versions changed. Latin glyphs were expanded and European languages (from Roboto font) were added. Many design and technical issues were resolved. Vazirmatn 32 marks a new chapter and a major step forward for this typeface. For a list of changes, see the [CHANGELOG.md](https://github.com/nadalaba/vazirharf/blob/master/CHANGELOG.md).

### What languages does this font support?

As of version 27 and later, Vazirharf supports Persian, Arabic, Kurdish, Pashto, Urdu, Gilaki, Uzbek, Kazakh, and Balochi.

### What category of fonts does Vazirharf belong to?

It belongs to the Sans category.

### How many styles/weights does this font have?

9 weights:
- Thin `Vazirharf-Thin.ttf`
- Extra Light `Vazirharf-ExtraLight.ttf`
- Light `Vazirharf-Light.ttf`
- Regular `Vazirharf-Regular.ttf`
- Medium `Vazirharf-Medium.ttf`
- Semi Bold `Vazirharf-SemiBold.ttf`
- Bold `Vazirharf-Bold.ttf`
- Extra Bold `Vazirharf-ExtraBold.ttf`
- Black `Vazirharf-Black.ttf`

### How can I view the font’s changelog after each release?

Check the `CHANGELOG.md` file in the full package or at:  
[github.com/nadalaba/vazirharf/blob/master/CHANGELOG.md](https://github.com/nadalaba/vazirharf/blob/master/CHANGELOG.md).

Or via the releases page:  
[github.com/nadalaba/vazirharf/releases](https://github.com/nadalaba/vazirharf/releases).

### How can I report issues or suggest improvements for Vazirharf?

If you have a GitHub account, you can submit a new issue in the font repository: [https://github.com/nadalaba/vazirharf/issues](https://github.com/nadalaba/vazirharf/issues).  
Or contact the creator via the email listed in [AUTHORS.txt](https://github.com/nadalaba/vazirharf/blob/master/AUTHORS.txt).

### How do I install the font on Windows?

Open the main or compressed file downloaded from the font’s homepage. Then go to the fonts/ttf folder, open the files, and click the Install button in the pop-up window. Alternatively, select all ttf files and move them to the windows/fonts folder.

### Why are numbers displayed in Arabic or Latin instead of Persian?

The standard Vazirharf font displays numbers in Persian if they are typed using the Persian input standard. If you see English or Arabic digits, it means they weren’t typed in Persian.  
Examples:  
Persian: ۱۲۳۴۵۶۷۸۹۰  
Arabic: ١٢٣٤٥٦٧٨٩٠  
Latin: 1234567890

A standard font should not alter the original text or correct input errors.

### Why are ۱ ۲ ۳ ۷ ۸ ۹ Persian but ٤ ٥ ٦ ٠ are not?

These digits differ between Arabic and Persian. For example, Arabic zero is usually solid, while Persian zero is hollow. To display Persian digits, they must be typed using the Persian standard code.

### I don’t care if the original text uses Latin or Arabic digits. How can I force Vazirharf to display Persian digits?

There are two methods:
- Use fonts in the `misc/Farsi-Digits` folder, where all English and Arabic digits are rewritten as Persian. This isn’t standard but solves the issue.
- Use a Stylistic Set: If your software supports OpenType features, enable ss01 Farsi Digits in Stylistic Sets, or use this CSS code on the web:

<div dir="ltr">

```css
.sample_farsi_digits {
    font-feature-settings: "ss01";
}
```

</div>

### Why aren’t the digits monospaced in Vazirharf?

Monospaced digits mean, for example, that the width of the digit 1 is equal to the width of the digit 5. In this case, the width of the two numbers below will be the same:  
۱۱۱۱۱  
۵۵۵۵۵  
This format is more suitable for reports. To display monospaced digits, if the software you’re using supports OpenType feature settings, select the Tabular Numeric option, or use the following CSS code in a web environment:

<div dir="ltr">

```css
.sample_tabular_numbers {
    font-feature-settings: "tnum";
}
```

</div>

### How can I use monospaced digits or fully Persian digits in LibreOffice?

In LibreOffice, go to the Format menu, select Character, then in the Font tab, click the Features button. Choose Stylistic Set 1 and Tabular Number for this purpose.

### How can I use monospaced digits or fully Persian digits in Inkscape?

From the Text menu, select Text and Font..., then in the Features tab, under Numeric, choose Tabular, or under Feature Setting, select ss01.

### How can I display fully Persian and monospaced digits simultaneously on a webpage using CSS?

<div dir="ltr">

```css
.sample_ss01_tnum {
    font-feature-settings: "ss01", "tnum";
}
```

</div>

### Which Latin font is combined with Vazirharf?

It’s combined with Roboto from Google. Roboto is a free font released under the Apache License version 2. [https://github.com/googlefonts/roboto](https://github.com/googlefonts/roboto).

### Where is the version of this font without Latin letters and symbols?

It’s located in the `misc/Non-Latin` folder.

### How can I merge Vazirharf with my preferred font?

You’ll need a font editing software. For example, you can install FontForge, open the Vazirharf file, then from the `Element` menu, choose `Merge Fonts...` and combine it with your desired font.

### Why do the top and bottom of text appear misaligned compared to other Latin fonts in the app I’m developing, and how can I fix it?

This issue is common with Persian/Arabic fonts. It’s because many Persian/Arabic letters like ("ح", "ر", "ی", etc), extend below the baseline, and diacritics are added above and below letters. As a result, Persian/Arabic letters often require more vertical space than Latin ones. For those who need a shorter version, an alternative is available in the UI folder of the package, which has reduced height.

### What is the UI version?

In this version, the font height is reduced to minimize the height difference between Latin and Persian/Arabic text. It’s suitable for those who need such formatting in an application's user interface.

### How can I set Vazirharf as the default font in Fontconfig-based desktop environments (mostly Unix-like systems)?

You can configure Fontconfig to set default fonts for your desktop environment. Here’s a sample user-level configuration that sets Vazirharf as the default font. You can modify it to include your preferred Latin fonts alongside Vazirharf. This configuration uses `Vazirharf` (UI version without Latin letters) and [`Vazir Code WOL`](https://github.com/rastikerdar/vazir-code-font) (Vazir Code font without Latin letters), along with several Latin fonts.

<div dir="ltr">

```xml
~/.config/fontconfig/fonts.conf

<?xml version='1.0'?>
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>
<fontconfig>
  <match target="font">
    <edit mode="assign" name="antialias">
      <bool>true</bool>
    </edit>
    <edit mode="assign" name="embeddedbitmap">
      <bool>false</bool>
    </edit>
    <edit name="autohint" mode="assign">
      <bool>true</bool>
    </edit>
    <edit mode="assign" name="hinting">
      <bool>true</bool>
    </edit>
    <edit mode="assign" name="hintstyle">
      <const>hintslight</const>
    </edit>
    <edit mode="assign" name="lcdfilter">
      <const>lcddefault</const>
    </edit>
    <edit mode="assign" name="rgba">
      <const>rgb</const>
    </edit>
  </match>
  
  <!-- Default sans-serif font -->
  <match target="pattern">
    <test qual="any" name="family"><string>sans-serif</string></test>
    <edit name="family" mode="prepend" binding="same"><string>Vazirharf UI NL</string></edit>
    <edit name="family" mode="append" binding="same"><string>DejaVu Sans</string></edit>
  </match>

  <!-- Default serif fonts -->
  <match target="pattern">
    <test qual="any" name="family"><string>serif</string></test>
    <edit name="family" mode="prepend" binding="same"><string>Vazirharf UI NL</string></edit>
    <edit name="family" mode="append" binding="same"><string>DejaVu Serif</string></edit>
  </match>


  <!-- Default monospace fonts -->
  <match target="pattern">
    <test qual="any" name="family"><string>monospace</string></test>
    <edit name="family" mode="prepend" binding="same"><string>Vazir Code WOL</string></edit>
    <edit name="family" mode="append" binding="same"><string>Inconsolata</string></edit>
  </match>


  <!-- Fallback fonts preference order -->
  <alias>
    <family>sans-serif</family>
    <prefer>
      <family>Vazirharf UI NL</family>
      <family>Roboto</family>
    </prefer>
  </alias>

  <alias>
    <family>serif</family>
    <prefer>
      <family>Vazirharf UI NL</family>
      <family>DejaVu Serif</family>
    </prefer>
  </alias>

  <alias>
    <family>monospace</family>
    <prefer>
      <family>Vazir Code WOL</family>
      <family>Inconsolata</family>
    </prefer>
  </alias>

</fontconfig>
```
</div>
