import os

image_folder = "images/gallery"  # Cesta ke složce s obrázky
output_file = "merch.html"  # Výstupní HTML soubor

# Získání seznamu obrázků
images = sorted(os.listdir(image_folder))

# Vygenerování HTML kódu
with open(output_file, "w", encoding="utf-8") as f:
    f.write('<div id="gallery">\n')
    for img in images:
        if img.lower().endswith((".jpg", ".png", ".jpeg", ".gif")):  # Filtrujeme jen obrázky
            f.write(f'    <img src="{image_folder}/{img}" class="img-fotogalerie">\n')
    f.write('</div>')

print(f"✅ HTML galerie byla vygenerována do {output_file}!")
