import heapq
from collections import Counter, defaultdict

def build_huffman_tree(data):
    frequency = Counter(data)
    heap = [[weight, [char, ""]] for char, weight in frequency.items()]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        lo = heapq.heappop(heap) 
        hi = heapq.heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    
    return heap[0]

def compress_data(data):
    huffman_tree = build_huffman_tree(data)
    huffman_codes = {char: code for char, code in huffman_tree[1:]}
    compressed_data = ''.join(huffman_codes[char] for char in data)
    return compressed_data
