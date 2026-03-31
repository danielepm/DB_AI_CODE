from pydantic import BaseModel

class PriorityRequest(BaseModel):
    urgence: int
    impact: int

class PriorityResponse(BaseModel):
    priority: str