from django.shortcuts import render
from .models import TasksListsModel
from .serializers import TasksListsSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework import generics


class getAndCreateTaskListsView(generics.ListCreateAPIView):
    queryset = TasksListsModel.objects.all()
    serializer_class = TasksListsSerializer


class UpdateAndDeleteTaskListsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TasksListsModel.objects.all()
    serializer_class = TasksListsSerializer



# from .models import TasksListsModel
# from .serializers import TasksListsSerializer
# from django.http import Http404
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status


# class TasksListApiView(APIView):
#     def get(self, request, format=None):
#         snippets = TasksListsModel.objects.all()
#         serializer = TasksListsSerializer(snippets, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = TasksListsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)