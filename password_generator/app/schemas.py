from pydantic import BaseModel

class PasswordRequest(BaseModel):
    length: int
    uppercase: bool = False
    digits: bool = False