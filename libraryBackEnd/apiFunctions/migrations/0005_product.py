# Generated by Django 4.0.3 on 2022-04-06 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiFunctions', '0004_book_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categoryId', models.IntegerField(default=0)),
                ('categoryName', models.CharField(default='', max_length=500)),
            ],
        ),
    ]
