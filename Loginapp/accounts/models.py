# accounts/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models


import uuid

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    role = models.CharField(max_length=20, default='admin')
