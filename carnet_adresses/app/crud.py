from sqlalchemy.orm import Session
from . import models, schemas


def get_contacts(db: Session):
    return db.query(models.Contact).all()


def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = models.Contact(
        nom=contact.nom,
        email=contact.email,
        telephone=contact.telephone
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact


def delete_contact(db: Session, contact_id: int):
    contact = db.query(models.Contact).filter(models.Contact.id == contact_id).first()
    if contact:
        db.delete(contact)
        db.commit()
    return contact