from pydantic import BaseModel


class ActivityInput(BaseModel):
    activity: str
    weight: float
    duration: float