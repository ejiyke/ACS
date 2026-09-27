import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public', exist_ok=True)

# 1. Generate quote-symbol.png
# Minimal geometric double quote icon (e.g. 192x144, transparent background, clean white geometry)
img_quote = Image.new('RGBA', (384, 288), (0, 0, 0, 0))
draw = ImageDraw.Draw(img_quote)

# Draw two geometric quote marks: modern rounded curved blocks
# Left quote
draw.polygon([(60, 180), (60, 100), (120, 60), (160, 60), (160, 140), (120, 140), (120, 180)], fill=(255, 255, 255, 240))
draw.ellipse([(60, 120), (120, 180)], fill=(255, 255, 255, 240))
draw.polygon([(80, 160), (140, 80), (160, 80), (160, 160), (120, 160), (100, 200), (80, 200)], fill=(255, 255, 255, 240))

# Clear and draw clean geometric double quotes
img_quote = Image.new('RGBA', (240, 180), (0, 0, 0, 0))
draw = ImageDraw.Draw(img_quote)

# First quote mark
draw.pieslice([(30, 40), (100, 110)], 180, 360, fill=(255, 255, 255, 230))
draw.polygon([(30, 75), (70, 75), (50, 140), (30, 140)], fill=(255, 255, 255, 230))
draw.ellipse([(30, 40), (100, 110)], fill=(255, 255, 255, 230))
draw.polygon([(30, 75), (75, 75), (45, 135), (30, 130)], fill=(255, 255, 255, 230))

# Second quote mark
draw.ellipse([(120, 40), (190, 110)], fill=(255, 255, 255, 230))
draw.polygon([(120, 75), (165, 75), (135, 135), (120, 130)], fill=(255, 255, 255, 230))

img_quote.save('public/quote-symbol.png', 'PNG')

# 2. Generate Minimalist Monochrome Logo: logo.png (256x256)
img_logo = Image.new('RGBA', (400, 400), (0, 0, 0, 0))
draw_l = ImageDraw.Draw(img_logo)

# Modern luxury geometric emblem for ACS: interlocking precision geometric architectural nodes / federal shield / data polygon
# Center emblem
center_x, center_y = 200, 200
# Outer subtle diamond / square
points_outer = [(200, 60), (340, 200), (200, 340), (60, 200)]
draw_l.polygon(points_outer, outline=(255, 255, 255, 240), width=8)

# Inner structural grid & nodes
draw_l.line([(200, 60), (200, 340)], fill=(255, 255, 255, 180), width=4)
draw_l.line([(60, 200), (340, 200)], fill=(255, 255, 255, 180), width=4)

# Inner diamond
points_inner = [(200, 110), (290, 200), (200, 290), (110, 200)]
draw_l.polygon(points_inner, outline=(255, 255, 255, 220), width=6)

# Center core solid circle
draw_l.ellipse([(175, 175), (225, 225)], fill=(255, 255, 255, 255))

img_logo.save('public/logo.png', 'PNG')
print("Assets generated successfully!")
