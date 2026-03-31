from pydantic import BaseModel

class FeedbackCreate(BaseModel):
    rating: int
    comment: str

class Feedback(FeedbackCreate):
    id: int

    class Config:
        orm_mode = True