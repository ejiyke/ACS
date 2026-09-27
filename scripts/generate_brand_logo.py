import os
import shutil
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public', exist_ok=True)

# Copy authentic logo.svg to public/logo.svg
shutil.copyfile('assets/logo.svg', 'public/logo.svg')

# Generate high-res authentic PNG based on the exact SVG shapes & colors (#00a3e0, #0099d8, #00b4d8, #00c8f8)
img = Image.new('RGBA', (640, 320), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Scale factor = 4 (from 160x80 viewBox)
s = 4

# Top decorative bar: <path d="M 40 16 L 120 16 L 105 32 L 55 32 Z" fill="#00a3e0" opacity="0.95"/>
draw.polygon([(40*s, 16*s), (120*s, 16*s), (105*s, 32*s), (55*s, 32*s)], fill=(0, 163, 224, 242))

# Left wing elements:
# <path d="M 12 24 L 35 24 C 38 24 40 28 40 32 C 40 36 38 40 35 40 L 12 40 Z" fill="#0099d8"/>
draw.rounded_rectangle([(12*s, 24*s), (40*s, 40*s)], radius=6*s, fill=(0, 153, 216, 255))
draw.rectangle([(12*s, 24*s), (25*s, 40*s)], fill=(0, 153, 216, 255))

# <path d="M 12 43 L 35 43 C 38 43 40 47 40 51 C 40 55 38 59 35 59 L 12 59 Z" fill="#0099d8"/>
draw.rounded_rectangle([(12*s, 43*s), (40*s, 59*s)], radius=6*s, fill=(0, 153, 216, 255))
draw.rectangle([(12*s, 43*s), (25*s, 59*s)], fill=(0, 153, 216, 255))

# Right wing elements:
# <path d="M 148 24 L 125 24 C 122 24 120 28 120 32 C 120 36 122 40 125 40 L 148 40 Z" fill="#0099d8"/>
draw.rounded_rectangle([(120*s, 24*s), (148*s, 40*s)], radius=6*s, fill=(0, 153, 216, 255))
draw.rectangle([(135*s, 24*s), (148*s, 40*s)], fill=(0, 153, 216, 255))

# <path d="M 148 43 L 125 43 C 122 43 120 47 120 51 C 120 55 122 59 125 59 L 148 59 Z" fill="#0099d8"/>
draw.rounded_rectangle([(120*s, 43*s), (148*s, 59*s)], radius=6*s, fill=(0, 153, 216, 255))
draw.rectangle([(135*s, 43*s), (148*s, 59*s)], fill=(0, 153, 216, 255))

# Bottom inverted decorative element: <path d="M 55 52 L 105 52 L 80 66 Z" fill="#00a3e0" opacity="0.95"/>
draw.polygon([(55*s, 52*s), (105*s, 52*s), (80*s, 66*s)], fill=(0, 163, 224, 242))

# Central connecting line: <line x1="28" y1="41.5" x2="132" y2="41.5" stroke="#00b4d8" stroke-width="1.5" opacity="0.8"/>
draw.line([(28*s, int(41.5*s)), (132*s, int(41.5*s))], fill=(0, 180, 216, 204), width=6)

# ACS Text in serif
try:
    font = ImageFont.truetype("times.ttf", int(24*s))
except:
    try:
        font = ImageFont.truetype("georgia.ttf", int(24*s))
    except:
        font = ImageFont.load_default()

# Draw ACS centered text with cyan glow #00c8f8
draw.text((80*s, 42*s), "ACS", fill=(0, 200, 248, 255), font=font, anchor="mm")

img.save('public/logo.png', 'PNG')
print("Authentic Logo generated successfully!")
