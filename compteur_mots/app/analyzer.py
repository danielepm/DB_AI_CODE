import re
from collections import Counter

def analyze_text(text: str):

    words = re.findall(r'\b\w+\b', text.lower())
    sentences = re.split(r'[.!?]+', text)

    word_count = len(words)
    char_count = len(text)
    sentence_count = len([s for s in sentences if s.strip() != ""])

    frequency = Counter(words).most_common(10)

    return {
        "word_count": word_count,
        "char_count": char_count,
        "sentence_count": sentence_count,
        "frequency": frequency
    }