# Generated by Django 4.0.3 on 2023-06-06 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_remove_appointment_date_remove_appointment_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(),
        ),
    ]
