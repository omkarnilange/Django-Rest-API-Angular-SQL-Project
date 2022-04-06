from django.urls import path
from .views import book_list,book_detail, ProfileView, IndexView, CustomAuthToken,category_list,product_list,ListUsers
urlpatterns = [
    path('book/', book_list),
    #path('', book_list),
    path('detail/<int:pk>', book_detail),
    path('accounts/profile/',ProfileView.as_view()),
    #path('',IndexView.as_view()),
    path('category/', category_list),
    path('product/', product_list),
    path('api/auth/', CustomAuthToken.as_view()),
    path('users/', ListUsers.as_view())
]
