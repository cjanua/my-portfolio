import base64
import io
import os
from PIL import Image
import cairosvg

# Function to process raster images with Pillow
def process_raster_image(file_path, base_width=250):
    with open(file_path, 'rb') as image_file:
        image = Image.open(image_file)

        # Calculate the new height maintaining the aspect ratio
        w_percent = (base_width / float(image.size[0]))
        h_size = int((float(image.size[1]) * float(w_percent)))

        # Resize the image
        image = image.resize((base_width, h_size), Image.Resampling.LANCZOS)

        # Save the optimized image to a bytes buffer
        optimized_image_buffer = io.BytesIO()
        image.save(optimized_image_buffer, format='PNG', optimize=True)
        optimized_image_size = optimized_image_buffer.tell()
        
        # Convert the optimized image to base64
        optimized_image_buffer.seek(0)
        return base64.b64encode(optimized_image_buffer.read()).decode('utf-8')

# Function to process SVG images with CairoSVG
def process_svg_image(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        svg_content = file.read()
    png_file = io.BytesIO()
    cairosvg.svg2png(bytestring=svg_content, write_to=png_file)
    png_file.seek(0)
    return base64.b64encode(png_file.getvalue()).decode('utf-8')


# Set the directory you want to start from
dir_path = 'src/_image/icons/toProcess'

# Loop through each file in the directory
with open('src/_image/icons/processed/Images.txt', 'a') as out:
    for filename in os.listdir(dir_path):
        file_path = os.path.join(dir_path, filename)
        print('working on ' + filename)
        if os.path.isfile(file_path):
            # Check file extension and process accordingly
            if filename.lower().endswith('.svg'):
                base64_encoded_image = process_svg_image(file_path)
            else:
                base64_encoded_image = process_raster_image(file_path)
            
            # Write the base64 string to the output file
            out.write(f'export const {filename.split(".")[0]} = "{base64_encoded_image}";\n')
