from sqlalchemy.orm import Session
from . import models, schemas


def get_tickets(db: Session):
    return db.query(models.Ticket).all()


def create_ticket(db: Session, ticket: schemas.TicketCreate):
    db_ticket = models.Ticket(
        title=ticket.title,
        description=ticket.description,
        status="open"
    )
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
    return db_ticket


def close_ticket(db: Session, ticket_id: int):
    ticket = db.query(models.Ticket).filter(models.Ticket.id == ticket_id).first()
    if ticket:
        ticket.status = "closed"
        db.commit()
        db.refresh(ticket)
    return ticket