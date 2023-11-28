# Algorithmes de Huffman

## `build_huffman_tree(data)`

Cette fonction construit l'arbre de Huffman à partir des données fournies.

### Paramètres :

- `data` : Chaîne de caractères en entrée pour construire l'arbre de Huffman

### Retour :

- **Type** : Liste imbriquée
- **Description** : Représentation de l'arbre de Huffman

### Description :

L'algorithme construit l'arbre de Huffman en utilisant l'algorithme de compression par codage de préfixe. Il utilise une file de priorité pour construire l'arbre en fonction des fréquences des caractères dans les données.

### Exemple d'utilisation :

```python
data = "aabbbccdddd"
huffman_tree = build_huffman_tree(data)
print("Arbre de Huffman construit:", huffman_tree)
```
