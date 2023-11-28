# Algorithme RLE (Run-Length Encoding)

## `encode_rle(data)`

Cette fonction encode les données en utilisant l'algorithme RLE (Run-Length Encoding).

### Paramètres :

- `data` : Chaîne de caractères à encoder

### Retour :

- **Type** : Chaîne de caractères encodée en RLE

### Description :

Cette fonction compte le nombre d'occurrences consécutives de caractères dans la chaîne `data` et les encode en utilisant l'algorithme RLE.

### Exemple d'utilisation :

```python
data = "AAABBBCCDDDD"
encoded_data = encode_rle(data)
print("Données encodées en RLE:", encoded_data)
```
