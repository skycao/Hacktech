from django.conf.urls import patterns, url
from piano import views

urlpatterns = patterns('',
                       url(r'^$', views.index, name='index')
                       )
