from PIL import Image
import sys

img_path = r'C:\Users\m.galanti\Documents\modena-kendo-dark-bold\src\assets\sandri.jpg'
try:
    img = Image.open(img_path)
    print(f'{img.width}x{img.height}')
    sys.stdout.flush()
except Exception as e:
    print(f'Error: {e}')
    sys.stdout.flush()
