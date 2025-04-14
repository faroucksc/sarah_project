from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta

from .. import models, schemas
from ..database import get_db
from ..config import ACCESS_TOKEN_EXPIRE_MINUTES
from .utils import (
    verify_password,
    get_password_hash,
    authenticate_user,
    create_access_token,
    get_current_active_user
)

router = APIRouter(prefix="/auth", tags=["authentication"])

@router.post("/register", response_model=schemas.User)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """Register a new user."""
    # TODO: Implement user registration
    # 1. Check if username or email already exists
    # 2. Create new user with hashed password
    # 3. Add user to database
    # 4. Return user information
    pass

@router.post("/token", response_model=schemas.Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    """Login and get access token."""
    # TODO: Implement login
    # 1. Authenticate user
    # 2. Create access token
    # 3. Return token
    pass

@router.get("/me", response_model=schemas.User)
def read_users_me(current_user: models.User = Depends(get_current_active_user)):
    """Get current user information."""
    # TODO: Implement get current user
    # 1. Return current user information
    pass
