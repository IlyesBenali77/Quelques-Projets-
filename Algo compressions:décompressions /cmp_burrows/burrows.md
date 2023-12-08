# Transformation de Burrows-Wheeler

## `transform_bwt(data)`

Cette fonction effectue la transformation de Burrows-Wheeler sur les données d'entrée.

### Paramètres :

- `data` : Chaîne de caractères à transformer

### Retour :

- **Type** : Tuple
- **Description** : Contient les données transformées et la clé de transformation

### Description :

Cette fonction génère les rotations circulaires de la chaîne `data`, les trie et récupère la dernière lettre de chaque rotation pour obtenir les données transformées selon l'algorithme de Burrows-Wheeler.

### Exemple d'utilisation :

```python
data = "banana"
transformed_data, key = transform_bwt(data)
print("Données transformées:", transformed_data)
print("Clé de transformation:", key)
```
