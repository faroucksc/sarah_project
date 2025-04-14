import os
import shutil
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException, status, Form
from sqlalchemy.orm import Session
from typing import List, Optional

from .. import models, schemas
from ..database import get_db
from ..auth.utils import get_current_active_user
from .utils import (
    is_valid_document,
    save_upload_file,
    extract_text_from_document,
    chunk_text
)
from ..config import UPLOAD_DIRECTORY, MAX_UPLOAD_SIZE

router = APIRouter(prefix="/documents", tags=["documents"])

@router.post("/upload", response_model=schemas.DocumentUpload)
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_active_user)
):
    """Upload a document and extract text."""
    # TODO: Implement document upload
    # 1. Validate file type
    # 2. Check file size
    # 3. Save file to disk
    # 4. Extract text from document
    # 5. Return document information
    pass

@router.get("/text/{filename}")
async def get_document_text(
    filename: str,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_active_user)
):
    """Get text from an uploaded document."""
    # TODO: Implement get document text
    # 1. Check if file exists
    # 2. Extract text from document
    # 3. Return text
    pass

@router.delete("/{filename}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_document(
    filename: str,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_active_user)
):
    """Delete an uploaded document."""
    # TODO: Implement document deletion
    # 1. Check if file exists
    # 2. Delete file
    # 3. Return success
    pass
