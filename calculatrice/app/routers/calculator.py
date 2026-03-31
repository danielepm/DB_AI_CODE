from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/api", tags=["Calculatrice"])


@router.get("/calculate")
def calculate(a: float, b: float, operation: str):
    if operation == "add":
        return {"result": a + b}
    elif operation == "sub":
        return {"result": a - b}
    elif operation == "mul":
        return {"result": a * b}
    elif operation == "div":
        if b == 0:
            raise HTTPException(status_code=400, detail="Division par zéro impossible")
        return {"result": a / b}
    else:
        raise HTTPException(status_code=400, detail="Opération inconnue")