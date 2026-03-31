from sqlalchemy.orm import Session
from . import models, schemas

def create_score(db: Session, score: schemas.ScoreCreate):
    db_score = models.Score(player=score['player'], points=score['points'])
    db.add(db_score)
    db.commit()
    db.refresh(db_score)
    return db_score


def get_scores(db: Session):
    return db.query(models.Score).order_by(models.Score.points.desc()).all()