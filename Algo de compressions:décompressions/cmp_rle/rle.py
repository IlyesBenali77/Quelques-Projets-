def encode_rle(data):
    """
    Cette fonction va encoder les données en utilisant l'algorithme RLE (Run-Length Encoding).
    -paramètre data : Chaîne de caractères à encoder
    -return : Chaîne de caractères encodée en RLE
    """
    encoded_data = ""
    count = 1
    for i in range(1, len(data)):
        if data[i] == data[i - 1]:
            count += 1
        else:
            encoded_data += str(count) + data[i - 1]
            count = 1
    return encoded_data

def decode_rle(encoded_data):
    """
    Cette fonction va décoder les données encodées en utilisant l'algorithme RLE.
    -paramètre encoded_data : Chaîne de caractères encodée en RLE
    -return : Chaîne de caractères décodée
    """
    decoded_data = ""
    i = 0
    while i < len(encoded_data):
        count = int(encoded_data[i])
        decoded_data += encoded_data[i + 1] * count
        i += 2
    return decoded_data
