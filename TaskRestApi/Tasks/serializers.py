from rest_framework import serializers
from Tasks.models import TasksListsModel


class TasksListsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TasksListsModel
        fields = ['id', 'title', 'description', 'photo', 'priority', 'is_complete','created_date','due_date','modified_date']