import os
import PyPDF2
import docx
from typing import List, Optional
import shutil
from pathlib import Path

from ..config import UPLOAD_DIRECTORY, ALLOWED_EXTENSIONS

def is_valid_document(filename: str) -> bool:
    """Check if file extension is supported."""
    # TODO: Implement file validation
    # 1. Get file extension
    # 2. Check if extension is in allowed extensions
    # 3. Return True if valid, False otherwise
    pass

def save_upload_file(upload_file, filename: str) -> str:
    """Save uploaded file to disk."""
    # TODO: Implement file saving
    # 1. Create file path
    # 2. Save file
    # 3. Return file path
    pass

def extract_text_from_document(file_path: str) -> str:
    """Extract text from document based on file type."""
    # TODO: Implement text extraction
    # 1. Get file extension
    # 2. Extract text based on file type
    # 3. Return extracted text
    pass

def extract_text_from_pdf(file_path: str) -> str:
    """Extract text from PDF file."""
    # TODO: Implement PDF text extraction
    # 1. Open PDF file
    # 2. Extract text from each page
    # 3. Return combined text
    pass

def extract_text_from_docx(file_path: str) -> str:
    """Extract text from DOCX file."""
    # TODO: Implement DOCX text extraction
    # 1. Open DOCX file
    # 2. Extract text
    # 3. Return text
    pass

def extract_text_from_txt(file_path: str) -> str:
    """Extract text from TXT file."""
    # TODO: Implement TXT text extraction
    # 1. Open TXT file
    # 2. Read text
    # 3. Return text
    pass

def chunk_text(text: str, chunk_size: int = 2000) -> List[str]:
    """Split text into manageable chunks for AI processing."""
    # TODO: Implement text chunking
    # 1. Split text into chunks
    # 2. Return list of chunks
    pass
