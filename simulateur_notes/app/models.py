from pydantic import BaseModel
from typing import List

class NotesInput(BaseModel):
    notes: List[float]