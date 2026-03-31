from pydantic import BaseModel

class ScoreCreate(BaseModel):
    player: str
    points: int

class Score(ScoreCreate):
    id: int

    class Config:
        orm_mode = True