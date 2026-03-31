from pydantic import BaseModel

class Contact(BaseModel):
    id: int
    nom: str
    email: str
    telephone: str