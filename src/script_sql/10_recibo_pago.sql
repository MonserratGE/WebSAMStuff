SELECT * FROM wss_ecommerce_262.recibo_pago;

-- Leer
SELECT * FROM wss_ecommerce_262.fila_compra;

-- ACTUALIZAR
INSERT INTO recibo_pago
VALUES (1 , 1, 'PAGADO', 1 , now(), now());

UPDATE recibo_pago
SET texto = 'RECHAZADO' , updated_at = now()
WHERE id_recibo = 2;


-- Forma correcta
UPDATE fila_compra
SET unidades = 3 , mensaje_salida = 'FINE'
WHERE id_fila = 1;

-- Delete
-- Borrar una fila
DELETE FROM fila_compra WHERE id_producto= 4;