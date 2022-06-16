-- Leer
SELECT * FROM wss_ecommerce_262.fila_compra;

-- ACTUALIZAR
INSERT INTO fila_compra
VALUES (1, 2, 3, 234 , 'OK');
INSERT INTO fila_compra
VALUES (2, 2, 3, 234 , 'OK');


-- Leer
SELECT * FROM wss_ecommerce_262.fila_compra;

-- ACTUALIZAR
-- Forma correcta
UPDATE fila_compra
SET unidades = 3 , mensaje_salida = 'RECHAZADO'
WHERE id_fila = 1;

-- Delete
-- Borrar una fila
DELETE FROM fila_compra WHERE id_producto= 4;
