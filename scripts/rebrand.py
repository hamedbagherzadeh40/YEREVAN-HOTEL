
import os

def rebrand(directory, old_name, new_name):
    print(f"🚀 Starting YERAVAN Rebrand Migration in {directory}...")
    for root, dirs, files in os.walk(directory):
        if '.git' in dirs:
            dirs.remove('.git')
        
        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content.replace(old_name, new_name)
                new_content = new_content.replace(old_name.lower(), new_name.lower())
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"✅ Updated: {file_path}")
            except Exception as e:
                print(f"⚠️ Skipping {file_path}: {e}")

if __name__ == "__main__":
    # Usage: python rebrand.py
    rebrand(".", "Naghli", "YERAVAN")
