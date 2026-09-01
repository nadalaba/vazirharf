"""
Replaces Latin and Arabic numbers with Farsi ones. 
Several Persian users needs this feature because of 
using legacy or unchangable environments.
"""

import sys
from fontTools.ttLib import TTFont
from copy import deepcopy

# map from Persian digits to Latin digits
latin_map = {
    "uni06F0": "zero",
    "uni0661": "one",
    "uni0662": "two",
    "uni0663": "three",
    "uni06F4": "four",
    "uni06F5": "five",
    "uni06F6": "six",
    "uni0667": "seven",
    "uni0668": "eight",
    "uni0669": "nine",
}

# map from Persian digits to Arabic digits
arabic_map = {
    "uni06F0": "uni0660",
    "uni06F4": "uni0664",
    "uni06F5": "uni0665",
    "uni06F6": "uni0666",
}

def copyGlyph(font, src, dst):
    glyf = font["glyf"]
    hmtx = font["hmtx"]

    # deep-copy outline so we don't share references
    glyf[dst] = deepcopy(glyf[src])

    # copy metrics (advance width + left side bearing)
    hmtx[dst] = hmtx[src]

    # copy variable deltas if the font has a gvar table
    if "gvar" in font:
            gvar = font["gvar"]
            if src in gvar.variations:
                gvar.variations[dst] = deepcopy(gvar.variations[src])

def setFarsiDigits(infile, outfile):
    font = TTFont(infile)

    # copy Persian to Latin
    for src, dst in latin_map.items():
        if src in font["glyf"]:
            copyGlyph(font, src, dst)

    # copy Persian to Arabic
    for src, dst in arabic_map.items():
        if src in font["glyf"]:
            copyGlyph(font, src, dst)

    font.save(outfile)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(
            "Args must be: <input-font> <output-font>")
        sys.exit(1)

    setFarsiDigits(sys.argv[1], sys.argv[2])
