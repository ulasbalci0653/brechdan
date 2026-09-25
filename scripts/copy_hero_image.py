import shutil
import os

src = r"C:\Users\Ulaş\.gemini\antigravity\brain\08c79e05-5268-4241-8c05-2ef3f8374fce\brechdan_hero_bg_1790326504680.jpg"
dst = r"C:\Users\Ulaş\Desktop\Brechdan\public\images\hero-bg.jpg"

os.makedirs(os.path.dirname(dst), exist_ok=True)
shutil.copy(src, dst)
print("Copied hero image successfully to", dst)
