from pydantic import BaseModel
from typing import List

class NotesRequest(BaseModel):
    notes: List[float]
    coefficients: List[float]