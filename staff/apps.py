from django.apps import AppConfig
from django.db.models.signals import post_migrate

class StaffConfig(AppConfig):
    name = 'staff'
    def ready(self):
        post_migrate.connect(do_init_data, sender=self)

def do_init_data(sender, **kwargs):
    init_category()

def init_category():
    """
        :return:None
    """
    try:
        from .models import TypeListModel as ls
        if ls.objects.filter(openid__iexact='init_data').exists():
            if ls.objects.filter(openid__iexact='init_data').count() != 7:
                ls.objects.filter(openid__iexact='init_data').delete()
                init_data = [
                    ls(id=1, openid='init_data', staff_type='Manager', creater='ZMGAMS'),
                    ls(id=2, openid='init_data', staff_type='Supplier', creater='ZMGAMS'),
                    ls(id=3, openid='init_data', staff_type='Customer', creater='ZMGAMS'),
                    ls(id=4, openid='init_data', staff_type='Supervisor', creater='ZMGAMS'),
                    ls(id=5, openid='init_data', staff_type='Inbound', creater='ZMGAMS'),
                    ls(id=6, openid='init_data', staff_type='Outbound', creater='ZMGAMS'),
                    ls(id=7, openid='init_data', staff_type='StockControl', creater='ZMGAMS')
                ]
                ls.objects.bulk_create(init_data, batch_size=100)
        else:
            init_data = [
                ls(id=1, openid='init_data', staff_type='Manager', creater='ZMGAMS'),
                ls(id=2, openid='init_data', staff_type='Supplier', creater='ZMGAMS'),
                ls(id=3, openid='init_data', staff_type='Customer', creater='ZMGAMS'),
                ls(id=4, openid='init_data', staff_type='Supervisor', creater='ZMGAMS'),
                ls(id=5, openid='init_data', staff_type='Inbound', creater='ZMGAMS'),
                ls(id=6, openid='init_data', staff_type='Outbound', creater='ZMGAMS'),
                ls(id=7, openid='init_data', staff_type='StockControl', creater='ZMGAMS')
            ]
            ls.objects.bulk_create(init_data, batch_size=100)
    except:
        pass
