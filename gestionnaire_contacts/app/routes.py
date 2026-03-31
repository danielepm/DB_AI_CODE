from fastapi import APIRouter
from .models import Contact
from .database import read_contacts, write_contacts

router = APIRouter()


@router.get("/contacts")
def get_contacts():
    return read_contacts()


@router.post("/contacts")
def add_contact(contact: Contact):
    contacts = read_contacts()
    contacts.append(contact.dict())
    write_contacts(contacts)
    return {"message": "Contact ajouté"}


@router.delete("/contacts/{contact_id}")
def delete_contact(contact_id: int):
    contacts = read_contacts()
    contacts = [c for c in contacts if c["id"] != contact_id]
    write_contacts(contacts)
    return {"message": "Contact supprimé"}