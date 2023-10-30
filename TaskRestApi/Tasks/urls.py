from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path('alltasks/',views.getAndCreateTaskListsView.as_view()),
    path('task/<int:pk>/',views.UpdateAndDeleteTaskListsView.as_view()),

]


