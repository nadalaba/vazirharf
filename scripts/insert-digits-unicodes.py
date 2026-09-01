import sys

def insertDigitsCodepoints(infile, outfile):
    digit_points = [f"U+003{i}" for i in range(10)]

    with open(infile, "r", encoding="utf-8") as f:
        existing = [line.strip() for line in f if line.strip()]

    merged = sorted(set(existing + digit_points))

    with open(outfile, "w", encoding="utf-8") as f:
        for cp in merged:
            f.write(cp + "\n")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Args must be: <input-file> <output-file>")
        sys.exit(1)

    insertDigitsCodepoints(sys.argv[1], sys.argv[2])
