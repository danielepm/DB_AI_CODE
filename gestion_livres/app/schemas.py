from pydantic import BaseModel

class BookCreate(BaseModel):
    titre: str
    auteur: str

class Book(BaseModel):
    id: int
    titre: str
    auteur: str
    statut: str

    class Config:
        orm_mode = True