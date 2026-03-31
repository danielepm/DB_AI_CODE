from sqlalchemy.orm import Session
from . import models, schemas


def get_preferences(db: Session, user: str):
    return db.query(models.Preference).filter(models.Preference.user == user).first()


def create_preferences(db: Session, pref: schemas.PreferenceCreate):
    db_pref = models.Preference(**pref.dict())
    db.add(db_pref)
    db.commit()
    db.refresh(db_pref)
    return db_pref


def update_preferences(db: Session, user: str, pref: schemas.PreferenceCreate):
    db_pref = get_preferences(db, user)

    if db_pref:
        for key, value in pref.dict().items():
            setattr(db_pref, key, value)

        db.commit()
        db.refresh(db_pref)

    return db_pref