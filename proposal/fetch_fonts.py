import urllib.request, base64, re, ssl, os

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
css_url = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&family=Sacramento&display=swap"

ctx = ssl.create_default_context(cafile="/root/.ccr/ca-bundle.crt") if os.path.exists("/root/.ccr/ca-bundle.crt") else None

def get(url, binary=False):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=ctx, timeout=60) as r:
        return r.read() if binary else r.read().decode("utf-8")

css = get(css_url)
# Parse @font-face blocks
blocks = re.findall(r"@font-face\s*\{[^}]*\}", css)
out = []
count = 0
for b in blocks:
    fam = re.search(r"font-family:\s*'([^']+)'", b).group(1)
    style = re.search(r"font-style:\s*(\w+)", b).group(1)
    weight = re.search(r"font-weight:\s*(\d+)", b).group(1)
    url = re.search(r"url\((https://[^)]+\.woff2)\)", b)
    if not url:
        continue
    data = get(url.group(1), binary=True)
    b64 = base64.b64encode(data).decode()
    out.append(f"@font-face{{font-family:'{fam}';font-style:{style};font-weight:{weight};font-display:swap;src:url(data:font/woff2;base64,{b64}) format('woff2');}}")
    count += 1
    print(f"embedded {fam} {style} {weight}  ({len(data)//1024}KB)")

with open("fonts.css", "w") as f:
    f.write("\n".join(out))
print(f"\nTotal faces: {count} -> fonts.css ({os.path.getsize('fonts.css')//1024}KB)")
