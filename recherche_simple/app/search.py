def filter_items(query: str, items: list):
    if not query:
        return items

    query = query.lower()

    return [
        item for item in items
        if query in item.lower()
    ]