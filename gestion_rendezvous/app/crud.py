from sqlalchemy.orm import Session
from . import models, schemas

def get_rendezvous(db: Session):
    return db.query(models.RendezVous).all()

def create_rendezvous(db: Session, rdv: schemas.RendezVousCreate):
    db_rdv = models.RendezVous(**rdv.dict())
    db.add(db_rdv)
    db.commit()
    db.refresh(db_rdv)
    return db_rdv

def delete_rendezvous(db: Session, rdv_id: int):
    rdv = db.query(models.RendezVous).filter(models.RendezVous.id == rdv_id).first()
    if rdv:
        db.delete(rdv)
        db.commit()