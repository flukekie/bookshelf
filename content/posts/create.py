import os, argparse
from datetime import datetime

parser = argparse.ArgumentParser()
parser.add_argument('slug',nargs='?',type=str,default=f"{datetime.now().strftime('%Y-%m-%d_%H.%M.%S')}", help="The slug of post, use only these following characters [0-9a-zA-Z-._]")
args = parser.parse_args()


slug = args.slug
filename = 'index.md'
time = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
path = slug

try:
    if os.path.exists(path):
        print(f"[info] Directory {path} already exists")
    else:
        os.makedirs(path)
        print(f"[success] Successfully created the directory {path}")
except OSError:
    print(f"[error] Failed to create directory {path}")

os.chdir(os.path.expanduser(path))

try:
    if os.path.isfile(filename):
        print(f"[info] File {filename} already exists")
    else:
        with open(filename, 'w') as f:
            f.write("---\n")
            f.write(f"title: {slug}\n")
            f.write(f"description: >\n  This file was generated automatically via create.py script.\n")
            f.write(f"created: {time}\n")
            f.write(f"updated: {time}\n")
            f.write(f"cover: ~\n")
            f.write(f"tags: ~\n")
            f.write("---\n\n")
            f.write("## Hello world\n")
            f.close()
            print (f"[info] created {filename} at {time}")
        print (f"[success] Successfully created the file {filename}")
except OSError:
    print (f"[error] Failed to create file {filename}")



