from pydantic import BaseModel

class PreferenceBase(BaseModel):
    user: str
    email_notifications: bool
    dark_mode: bool
    marketing_emails: bool


class PreferenceCreate(PreferenceBase):
    pass


class Preference(PreferenceBase):
    id: int

    class Config:
        orm_mode = True