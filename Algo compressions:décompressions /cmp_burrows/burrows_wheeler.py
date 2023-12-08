def transform_bwt(data):
    """
    Cette fonction effectue la transformation de Burrows-Wheeler sur les données d'entrée.
    -paramètre data : Chaîne de caractères à transformer
    -return : Tuple contenant les données transformées et la clé de transformation
    """
    rotations = [data[i:] + data[:i] for i in range(len(data))]
    rotations.sort()
    transformed_data = ''.join(rot[-1] for rot in rotations)
    key = rotations.index(data)
    return transformed_data, key

def inverse_bwt(transformed_data, key):
    """
    Cette fonction effectue l'inverse de la transformation de Burrows-Wheeler.
    -paramètre transformed_data : Données transformées par Burrows-Wheeler
    -paramètre key : Clé de transformation utilisée lors de la transformation de Burrows-Wheeler
    -return : Données d'origine avant la transformation de Burrows-Wheeler
    """
    table = sorted(transformed_data)
    for i in range(len(transformed_data) - 1):
        table = sorted([transformed_data[j] + table[j] for j in range(len(transformed_data))])
    original_data = table[key]
    return original_data


