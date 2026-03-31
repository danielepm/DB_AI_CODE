from sqlalchemy import Column, Integer, String, Date, Time
from .database import Base

class RendezVous(Base):
    __tablename__ = "rendezvous"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date)
    heure = Column(Time)
    description = Column(String)