# Generated by Django 4.0.3 on 2023-06-15 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0017_alter_appointment_date_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='date',
            field=models.DateField(default='2020-01-01'),
        ),
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.TimeField(default='00:00:00'),
        ),
    ]
