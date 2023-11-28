from cmp_burrows.burrows_wheeler import transform_bwt, inverse_bwt
from cmp_rle.rle import encode_rle, decode_rle
from cmp_huffman.huffman import compress_data

import argparse

parser = argparse.ArgumentParser(prog="Empaktor", description='Compress and decompress files')

parser.add_argument('archive', type=str)
parser.add_argument('--compression', type=str)
parser.add_argument('--extract', type=str)
parser.add_argument('fichiers', nargs='+', type=str)
args = parser.parse_args()

archive = args.archive
compression = args.compression
extract = args.extract
fichiers = args.fichiers

print('Archive:', archive)
print('Compression:', compression)
print('Extract:', extract)
print('Fichiers à traiter:', fichiers)

def empaktor_compressed(c, f):
    if c == "rle":
        result = encode_rle(f)
    elif c == "burrows_wheeler":
        result = transform_bwt(f)
    elif c == "huffman":
        result = compress_data(f)
    return result

def empaktor_extract(e, f):
    if e == "rle":
        result = decode_rle(f)
    elif e == "burrows_wheeler":
        result = inverse_bwt(f)
    elif e == "huffman":
        result = compress_data(f)
    return result

def empaktor(c, e, f):
    if c:
        result = empaktor_compressed(c, f)
    elif e:
        result = empaktor_extract(e, f)
    else:
        return "Method not found"
    return result

file_path = str(fichiers).strip('\'"[]')
file = open(file_path, 'r')
content = file.read()

result = empaktor(compression, extract, content)
print(result)

with open(archive, "w") as f:
    f.write(str(result))
