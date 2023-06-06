# Generated by Django 4.0.3 on 2023-06-06 13:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='salesperson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salespeople', to='sales_rest.salesperson'),
        ),
    ]
