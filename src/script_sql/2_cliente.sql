insert into cliente values(1,1,"Arely","Martínez", "sdjkjf", now(), now());
update cliente set nombre = "Karla Arely", apellidos = "Martínez", updated_at = now();
delete from  cliente where id_cliente = 1;