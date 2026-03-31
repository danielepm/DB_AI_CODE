from pydantic import BaseModel, EmailStr, constr

class ContactForm(BaseModel):
    name: constr(min_length=2, max_length=50)
    email: EmailStr
    message: constr(min_length=10, max_length=500)