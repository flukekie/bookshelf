import os, argparse
from datetime import datetime

parser = argparse.ArgumentParser()
parser.add_argument('slug',nargs='?',type=str,default=f"{datetime.now().strftime('%Y%m%d-%H%M%S')}", help="The slug of post")
args = parser.parse_args()


i_slug = args.slug
filename = 'index.md'

title_key = 'title'
title_val = i_slug

dt_key = 'datetime_created'
dt_val = datetime.utcnow().replace(microsecond=0).isoformat()+'Z'

path = i_slug

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
            f.write(f"{dt_key}: {dt_val}\n")
            f.write(f"{title_key}: {title_val}\n")
            f.write(f"description: >\n {title_val}\n")
            f.write(f"cover: ~\n")
            f.write(f"tags: ~\n")
            f.write("---\n")
            f.write("# Hello world")
            f.close()
            print (f"created {filename} at {dt_val}")
        print (f"[success] Successfully created the file {filename}")
except OSError:
    print (f"[error] Failed to create file {filename}")



