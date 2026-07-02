"""
routes.py

API endpoints for FinGuard AI.
"""

from fastapi import APIRouter

router = APIRouter()


@router.get("/ping")
def ping():

    return {

        "message": "FinGuard API Working"

    }