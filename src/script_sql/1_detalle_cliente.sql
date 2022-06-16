INSERT into detalle_cliente values (1, "paseo de los nublados, 776,  la roma, CDMX ", "5578989878","memito@gmail.com","5566242378656745", "Guillermo Perez Canela","0927", NOW(),NOW());

UPDATE detalle_cliente set numero_tarjeta = "5566242378659878", updated_at = now() where id_detalle_cliente = 1;

DELETE FROM detalle_cliente WHERE id_detalle_cliente = 2;
