from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class Preference(Base):
    __tablename__ = "preferences"

    id = Column(Integer, primary_key=True, index=True)
    user = Column(String, index=True)

    email_notifications = Column(Boolean, default=True)
    dark_mode = Column(Boolean, default=False)
    marketing_emails = Column(Boolean, default=False)