from pydantic import BaseModel, Field, EmailStr

class Contact(BaseModel):
    id: int

    nom: str = Field(
        min_length=1,
        max_length=50
    )

    email: EmailStr

    telephone: str = Field(
        pattern=r"^\+[1-9]\d{0,14}$"
    )
