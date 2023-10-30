from django.db import models

class TasksListsModel(models.Model):
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    photo = models.ImageField(upload_to='photos/TaskPhoto', null=True, blank=True)
    is_complete = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
