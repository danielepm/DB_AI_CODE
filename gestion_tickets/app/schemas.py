from pydantic import BaseModel

class TicketCreate(BaseModel):
    title: str
    description: str

class Ticket(BaseModel):
    id: int
    title: str
    description: str
    status: str

    class Config:
        orm_mode = True