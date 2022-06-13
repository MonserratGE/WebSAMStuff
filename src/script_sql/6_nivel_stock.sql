
insert into nivel_stock values(1, 1, 3, 7 , now(), now());
update nivel_stock set id_stock = 1 , id_producto = 1 ,updated_at = now();
delete from  nivel_stock where id_stock = 1;