from sqlalchemy.orm import Session
from . import models, schemas


def get_books(db: Session):
    return db.query(models.Book).all()


def create_book(db: Session, book: schemas.BookCreate):
    db_book = models.Book(
        titre=book.titre,
        auteur=book.auteur,
        statut="disponible"
    )
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book


def update_status(db: Session, book_id: int, statut: str):
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    book.statut = statut
    db.commit()
    db.refresh(book)
    return book