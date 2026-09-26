from PIL import Image

def make_transparent(image_path, output_path):
    print(f"Processing {image_path}...")
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Calculate luminance
            lum = (item[0]*0.299 + item[1]*0.587 + item[2]*0.114)
            if lum > 250:
                newData.append((255, 255, 255, 0)) # transparent
            elif lum > 230:
                alpha = int(255 * (250 - lum) / 20)
                newData.append((item[0], item[1], item[2], alpha))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

make_transparent('assets/ganesha-pastel.png', 'assets/ganesha-pastel.png')
make_transparent('assets/flower-pastel.png', 'assets/flower-pastel.png')
