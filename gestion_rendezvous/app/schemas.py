from pydantic import BaseModel
from datetime import date, time

class RendezVousCreate(BaseModel):
    date: date
    heure: time
    description: str

class RendezVous(BaseModel):
    id: int
    date: date
    heure: time
    description: str

    class Config:
        orm_mode = True