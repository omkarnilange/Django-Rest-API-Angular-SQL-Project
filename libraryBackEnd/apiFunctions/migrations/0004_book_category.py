# Generated by Django 4.0.3 on 2022-04-06 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiFunctions', '0003_book_language'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.IntegerField(default=0),
        ),
    ]
