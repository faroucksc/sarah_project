from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from .database import engine, Base

# Import routers
from .auth.router import router as auth_router
from .document.router import router as document_router
from .ai.router import router as ai_router
from .flashcards.router import router as flashcards_router
from .study.router import router as study_router

# Create database tables
Base.metadata.create_all(bind=engine)

# Create upload directory if it doesn't exist
os.makedirs("uploads", exist_ok=True)

app = FastAPI(title="Flashcard App API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: Restrict to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
# app.mount("/static", StaticFiles(directory="static"), name="static")

# Include routers
app.include_router(auth_router, prefix="/api")
app.include_router(document_router, prefix="/api")
app.include_router(ai_router, prefix="/api")
app.include_router(flashcards_router, prefix="/api")
app.include_router(study_router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Welcome to Flashcard App API"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
