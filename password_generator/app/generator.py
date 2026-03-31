import random
import string

def generate_password(length: int, uppercase: bool, digits: bool):
    characters = string.ascii_lowercase

    if uppercase:
        characters += string.ascii_uppercase

    if digits:
        characters += string.digits

    password = ''.join(random.choice(characters) for _ in range(length))

    return password