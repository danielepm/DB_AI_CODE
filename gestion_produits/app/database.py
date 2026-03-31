products = []
counter = 1

def add_product(name, price):
    global counter

    product = {
        "id": counter,
        "name": name,
        "price": price
    }

    products.append(product)
    counter += 1

    return product


def get_products():
    return products


def delete_product(product_id):
    global products
    products = [p for p in products if p["id"] != product_id]