SELECT * FROM wss_prueba.catalogo_metodo_pago;

-- **************************** CREAR CATEGORIA ********************************
INSERT INTO catalogo_metodo_pago(id_metodo_pago, nombre_metodo_pago, codigo_metodo_pago, created_at, updated_at) VALUES 
						(null, "Efectivo", "EF", NOW(), NOW());
INSERT INTO catalogo_metodo_pago(id_metodo_pago, nombre_metodo_pago, codigo_metodo_pago, created_at, updated_at) VALUES 
						(null, "Transferencia", "TRA", NOW(), NOW());
INSERT INTO catalogo_metodo_pago(id_metodo_pago, nombre_metodo_pago, codigo_metodo_pago, created_at, updated_at) VALUES 
						(null, "Tarjeta debito", "TD", NOW(), NOW());
INSERT INTO catalogo_metodo_pago(id_metodo_pago, nombre_metodo_pago, codigo_metodo_pago, created_at, updated_at) VALUES 
						(null, "Tarjeta credito", "TC", NOW(), NOW());
                        
-- **************************** MOSTRAR METODO DE PAGO ********************************
-- Leer datos de categoria
SELECT * FROM wss_prueba.catalogo_metodo_pago;

SELECT*FROM catalogo_metodo_pago WHERE nombre_metodo_pago = "Transferencia";
SELECT*FROM catalogo_metodo_pago WHERE nombre_metodo_pago = "Tarjeta debito";
SELECT*FROM catalogo_metodo_pago WHERE codigo_metodo_pago = "EF";
-- **************************** ELIMINAR METODO DE PAGO ********************************
-- Borrar una fila
DELETE FROM catalogo_metodo_pago WHERE id_metodo_pago = 3;
-- Borrar una columna
ALTER TABLE categoria DROP COLUMN nombre_categoria;
-- Borrar una table
DROP TABLE categoria;
-- **************************** ACTUALIZAR METODO DE PAGO ********************************				
-- Agregar una columna
UPDATE catalogo_metodo_pago SET nombre_metodo_pago = "Efectivo" WHERE id_metodo_pago = 1;
UPDATE catalogo_metodo_pago SET codigo_metodo_pago = "EF" WHERE id_metodo_pago = 1;