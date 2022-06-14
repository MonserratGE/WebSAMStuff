SELECT * FROM wss_prueba.categoria;

-- **************************** CREAR CATEGORIA ********************************
-- //////////////////////////////////////////////  1
INSERT INTO categoria VALUES (null, "Escritorio", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Escritorio", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Escritorio", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Escritorio", "Vintage", NOW(), NOW());-- //////////////////////////////////////////////  2
INSERT INTO categoria VALUES (null, "Comedores", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Comedores", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Comedores", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Comedores", "Vintage", NOW(), NOW());-- //////////////////////////////////////////////   3
INSERT INTO categoria VALUES (null, "Oficina", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Oficina", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Oficina", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Oficina", "Vintage", NOW(), NOW());-- ////////////////////////////////////////////// 4
INSERT INTO categoria VALUES (null, "Exeriores", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Exeriores", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Exeriores", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Exeriores", "Vintage", NOW(), NOW());-- ////////////////////////////////////////////// 5
INSERT INTO categoria VALUES (null, "Barras", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Barras", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Barras", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Barras", "Vintage", NOW(), NOW());-- ////////////////////////////////////////////// 6
INSERT INTO categoria VALUES (null, "Mesas", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Mesas", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Mesas", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Mesas", "Vintage", NOW(), NOW()); -- //////////////////////////////////////////////         7 
INSERT INTO categoria VALUES (null, "Percheros", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Percheros", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Percheros", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Percheros", "Vintage", NOW(), NOW()); -- //////////////////////////////////////////////         8  
INSERT INTO categoria VALUES (null, "Salas", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Salas", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Salas", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Salas", "Vintage", NOW(), NOW()); -- //////////////////////////////////////////////         9  
INSERT INTO categoria VALUES (null, "Sillas", "Rustico", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Sillas", "Minimalista", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Sillas", "Clásico Actual", NOW(), NOW());
INSERT INTO categoria VALUES (null, "Sillas", "Vintage", NOW(), NOW()); 
-- **************************** MOSTRAR CATEGORIA ********************************
-- Leer datos de categoria
SELECT* FROM categoria;
-- leer categoria junto con su actualizacion
SELECT nombre_categoria, updated_at FROM categoria;

SELECT*FROM categoria WHERE estilo_categoria = "Rustico";
SELECT*FROM categoria WHERE nombre_categoria = "Oficina";

-- **************************** ELIMINAR CATEGORIA ********************************
-- Borrar una fila
DELETE FROM categoria WHERE nombre_categoria = "Exteriores";
-- Borrar una columna
ALTER TABLE categoria DROP COLUMN nombre_categoria;
-- Borrar una table
DROP TABLE categoria;
-- **************************** ACTUALIZAR CATEGORIA ********************************
-- Agregar una columna
ALTER TABLE categoria ADD COLUMN nombre_categoria VARCHAR(100) NOT NULL;

-- Agrega una columna en ua posicion especifica
ALTER TABLE categoria ADD COLUMN nombre_categoria DATE AFTER id_categoria;

UPDATE categoria SET nombre_categoria = "Oficina" WHERE id_categoria = 2;
UPDATE categoria SET estilo_categoria = "Minimalista" WHERE id_categoria = 3;
