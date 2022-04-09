from django.urls import path
from .views import book_list,product_detail, ProfileView, IndexView, CustomAuthToken,category_list,product_list,ListUsers,RegisterAPI,LoginAPI
from knox import views as knox_views
urlpatterns = [
    path('product/', product_list),
    path('', book_list),
    path('detail/<int:pk>', product_detail),
    path('accounts/profile/',ProfileView.as_view()),
    #path('',IndexView.as_view()),
    path('category/', category_list),
    path('book/', book_list),
    path('api/auth/', CustomAuthToken.as_view()),
    path('users/', ListUsers.as_view()),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    
]
