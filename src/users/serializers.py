from djoser.serializers import UserCreateSerializer
from .models import CustomUser


class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = ('email', 'password')

    def create(self, validated_data):
        user = CustomUser.objects.create(
            email=validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()
        return user
