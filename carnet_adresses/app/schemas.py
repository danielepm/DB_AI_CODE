from pydantic import BaseModel

class ContactBase(BaseModel):
    nom: str
    email: str
    telephone: str


class ContactCreate(ContactBase):
    pass


class Contact(ContactBase):
    id: int

    class Config:
        orm_mode = True