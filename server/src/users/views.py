from rest_framework import generics, permissions
from .serializers import CustomUserCreateSerializer
from .models import CustomUser


class CreateCustomUserView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomUserCreateSerializer
