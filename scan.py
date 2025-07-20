import os

# Thư mục gốc cần duyệt (thay bằng đường dẫn phù hợp)
root_dir = 'C:/Users/LENOVO/Desktop/Github/KindaRusty.github.io'    # VD: 'D:/my_project'
output_file = 'all_code.txt'

# Các loại file cần lấy code
extensions = ['.html', '.js', '.css']

# Mở file ghi kết quả
with open(output_file, 'w', encoding='utf-8') as outfile:
    for subdir, dirs, files in os.walk(root_dir):
        for filename in files:
            ext = os.path.splitext(filename)[1].lower()
            if ext in extensions:
                file_path = os.path.join(subdir, filename)
                outfile.write(f"\n===== Ten file: {file_path} =====\n")
                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        code = infile.read()
                        outfile.write(code)
                        outfile.write("\n\n")
                except Exception as e:
                    outfile.write(f"[Loi doc file: {e}]\n\n")
print(f"Da luu code vao file: {output_file}")
