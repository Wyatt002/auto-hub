# Generated by Django 4.0.3 on 2023-06-15 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0020_alter_appointment_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.CharField(default='09:00:00', max_length=8),
        ),
    ]