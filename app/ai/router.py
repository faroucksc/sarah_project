from fastapi import APIRouter, Depends, HTTPException, status, Body
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas
from ..database import get_db
from ..auth.utils import get_current_active_user
from .utils import generate_flashcards_from_text
from ..document.utils import extract_text_from_document

router = APIRouter(prefix="/ai", tags=["ai"])

@router.post("/generate-flashcards", response_model=List[schemas.FlashcardCreate])
async def generate_flashcards(
    text_input: schemas.TextInput,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_active_user)
):
    """Generate flashcards from text."""
    # TODO: Implement flashcard generation
    # 1. Call OpenAI to generate flashcards
    # 2. Parse response into flashcard format
    # 3. Return generated flashcards
    pass

@router.post("/generate-from-document", response_model=schemas.FlashcardSetWithCards)
async def generate_flashcards_from_document(
    document_input: schemas.DocumentInput,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_active_user)
):
    """Generate flashcards from an uploaded document."""
    # TODO: Implement document-based flashcard generation
    # 1. Get document text
    # 2. Generate flashcards from text
    # 3. Create flashcard set with generated cards
    # 4. Return created set with cards
    pass
