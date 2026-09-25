import os
import shutil

src1 = r"C:\Users\Ulaş\.gemini\antigravity\brain\08c79e05-5268-4241-8c05-2ef3f8374fce\.user_uploaded\media_1790325416611.png"
src2 = r"C:\Users\Ulaş\.gemini\antigravity\brain\08c79e05-5268-4241-8c05-2ef3f8374fce\.user_uploaded\media_1790325417438.png"

os.makedirs("public/images", exist_ok=True)
shutil.copy(src1, "public/images/menu-sandwich.png")
shutil.copy(src2, "public/images/menu-classics.png")
print("Menu images copied to public/images/")

try:
    from PIL import Image
    im1 = Image.open("public/images/menu-sandwich.png")
    w, h = im1.size
    print(f"Image 1 dimensions: {w}x{h}")
    # Crop Mascot top right:
    # Fox with whisk: x roughly 0.65w to 0.90w, y roughly 0.01h to 0.15h
    fox_whisk = im1.crop((int(w * 0.65), int(h * 0.01), int(w * 0.90), int(h * 0.14)))
    fox_whisk.save("public/images/mascot-whisk.png")
    
    # Mascot bottom left (fox eating sandwich):
    fox_eating = im1.crop((int(w * 0.05), int(h * 0.67), int(w * 0.45), int(h * 0.99)))
    fox_eating.save("public/images/mascot-eating.png")

    # Logo header: "BRECHDAN Menu Sandwich"
    logo_header = im1.crop((int(w * 0.30), int(h * 0.01), int(w * 0.65), int(h * 0.13)))
    logo_header.save("public/images/logo-header.png")

    im2 = Image.open("public/images/menu-classics.png")
    w2, h2 = im2.size
    print(f"Image 2 dimensions: {w2}x{h2}")
    # Fox chef in pan:
    fox_pan = im2.crop((int(w2 * 0.33), int(h2 * 0.45), int(w2 * 0.65), int(h2 * 0.71)))
    fox_pan.save("public/images/mascot-chef-pan.png")

    print("Extracted mascot and logo assets successfully!")
except Exception as e:
    print(f"PIL process info: {e}")
