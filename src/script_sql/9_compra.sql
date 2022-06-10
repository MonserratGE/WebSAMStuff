SELECT * FROM compra;
INSERT into compra values ( 1,1, 2, 3, 7890, NOW(),NOW());
UPDATE compra set total = 9768 where id_compra = 1;