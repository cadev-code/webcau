-- CREATE DATABASE authcau;

-- USE authcau;

-- CREATE TABLE users(
--   id INTEGER PRIMARY KEY AUTO_INCREMENT,
--   username VARCHAR(254) NOT NULL,
--   agent VARCHAR(254) NOT NULL,
--   permissions VARCHAR(254) NOT NULL,
--   password VARCHAR(254) NOT NULL
-- );

-- INSERT INTO users (username, agent, password, permissions)
--   VALUES ('admin', 'Carlos', 'admin', '["admin"]');

-- CREATE DATABASE webcau;

USE webcau;

CREATE TABLE areas_emails_cmdb(
  `id_area` int AUTO_INCREMENT,
  `area` varchar(255) NOT NULL,
  PRIMARY KEY (`id_area`)
);

INSERT INTO areas_emails_cmdb (`area`) VALUES 
  ('Supervisores'),
  ('Discado'),
  ('Reclutamiento RH');

-- INSERT INTO areas_emails_cmdb (`area`) VALUES (?);
-- UPDATE areas_emails_cmdb SET `area` = ? WHERE id_area = ?;
-- DELETE FROM areas_emails_cmdb WHERE id_area = ?;

CREATE TABLE registers_emails_cmdb(
  `id_register` int AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_area` int,
  PRIMARY KEY (`id_register`),
  FOREIGN KEY (`id_area`) REFERENCES areas_emails_cmdb(`id_area`) ON DELETE CASCADE
);

INSERT INTO registers_emails_cmdb (`name`, `email`, `password`, `id_area`) VALUES 
  ('Isarly Contreras', 'icontreras@smart-center.com.mx', '8Gh2fE4s6H9j', 1),
  ('Alan Portilla', 'aportilla@smart-center.com.mx', '3Pq7rT5w1Y0z', 1),
  ('Guillermo Valenciaga', 'gvalenciaga@smart-center.com.mx', '6Bv9nM2x4A1c', 1),
  ('Daniel Guzman', 'dguzman@smart-center.com.mx', '5Kl8jN7b3V2g', 2),
  ('Zadkiel Rodriguez', 'zrodriguez@smart-center.com.mx', '9Xv6mZ3l7Q0p', 2),
  ('Jose Pereira', 'jpereira@smart-center.com.mx', '2Fg5hR1t8U9i', 2),
  ('Rodolfo Ramírez', 'rramirez@smart-center.com.mx', '4Ws7dE6y0N3a', 3),
  ('Alberto Rojas', 'arojas@smart-center.com.mx', '1Tb9zQ5o2I8x', 3),
  ('Gonzalo Tovar', 'gtovar@smart-center.com.mx', '7Lv4kD8u6O3e', 3);

-- USE webcau;

-- INSERT INTO registers_emails_cmdb (`name`, `email`, `password`, `id_area`) VALUES (?,?,?,?);
-- UPDATE registers_emails_cmdb SET `name` = ?, `email`, = ? `password` = ? WHERE id_register = ?;
-- DELETE FROM registers_emails_cmdb WHERE id_register = ?;

CREATE TABLE lists_emails_cmdb(
  `id_list` int AUTO_INCREMENT,
  `list` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_list`)
);

INSERT INTO lists_emails_cmdb (`id_list`, `list`) VALUES (1, 'SIN VALOR');

-- INSERT INTO lists_emails_cmdb (`list`) VALUES (?);
-- UPDATE lists_emails_cmdb SET `list` = ? WHERE id_list = ?;
-- DELETE FROM lists_emails_cmdb WHERE id_list = ?;

ALTER TABLE registers_emails_cmdb
ADD `id_list` int DEFAULT 1,
ADD CONSTRAINT `fk_relacion` 
FOREIGN KEY (`id_list`) REFERENCES lists_emails_cmdb(`id_list`) ON DELETE CASCADE;

ALTER TABLE registers_emails_cmdb
ADD `status` VARCHAR(255) NOT NULL DEFAULT 'Activo';

-- SELECT 
--   registers_emails_cmdb.id_register, 
--   registers_emails_cmdb.name, 
--   registers_emails_cmdb.email, 
--   registers_emails_cmdb.password, 
--   areas_emails_cmdb.area,
--   lists_emails_cmdb.list,
--   registers_emails_cmdb.status
-- FROM registers_emails_cmdb 
-- INNER JOIN areas_emails_cmdb 
-- ON registers_emails_cmdb.id_area = areas_emails_cmdb.id_area
-- INNER JOIN lists_emails_cmdb
-- ON registers_emails_cmdb.id_list = lists_emails_cmdb.id_list
-- ORDER BY registers_emails_cmdb.id_register DESC;

-- SELECT registers_emails_cmdb.id_register, registers_emails_cmdb.name, registers_emails_cmdb.email, registers_emails_cmdb.password, areas_emails_cmdb.area, lists_emails_cmdb.list, registers_emails_cmdb.status FROM registers_emails_cmdb INNER JOIN areas_emails_cmdb ON registers_emails_cmdb.id_area = areas_emails_cmdb.id_area INNER JOIN lists_emails_cmdb ON registers_emails_cmdb.id_list = lists_emails_cmdb.id_list ORDER BY registers_emails_cmdb.id_register DESC;

-- use webcau;

-- CREATE TABLE areas_computers_cmdb(
--   `id_area` INT AUTO_INCREMENT,
--   `area` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id_area`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO areas_computers_cmdb (`id_area`, `area`) VALUES
--   (1,'Planta Baja'),
--   (2,'Piso 1'),
--   (3,'MZ1'),
--   (4,'MZ2'),
--   (5,'MZ3'),
--   (6,'Zona Segura'),
--   (7,'Reclutamiento'),
--   (8,'Caseta'),
--   (9,'Comedor'),
--   (10,'CAU'),
--   (11,'Nómina'),
--   (12,'Jurídico'),
--   (13,'Mantenimiento'),
--   (14,'Enfermería'),
--   (15,'Seguridad');

-- CREATE TABLE licenses_computers_cmdb(
--   `id_license` INT AUTO_INCREMENT,
--   `license` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id_license`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO licenses_computers_cmdb (`id_license`, `license`) VALUES
--   (1, 'No Aplica'),
--   (2, '180244SRJRYFNJPX9MP3N0211'),
--   (3, '180WEX7KB4W24N3F9MP3N0211');

-- CREATE TABLE models_computers_cmdb(
--   `id_model` INT AUTO_INCREMENT,
--   `model` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id_model`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO models_computers_cmdb (`id_model`,`model`) VALUES
--   (1,'No Aplica'),
--   (2,'ThinkCentre M83'),
--   (3,'ThinkCentre M73'),
--   (4,'ThinkCentre M72e'),
--   (5,'ThinkCentre M93p'),
--   (6,'ThinkCentre M79'),
--   (7,'Lenovo S510'),
--   (8,'Reinstalar agente'),
--   (9,'ThinkCentre M700'),
--   (10,'OptiPlex 3060'),
--   (11,'OptiPlex 3050'),
--   (12,'ThinkCentre M82'),
--   (13,'HP 280 G2 SFF'),
--   (14,'ThinkCentre M900'),
--   (15,'ThinkCentre M92p'),
--   (16,'OptiPlex 3070'),
--   (17,'Vostro 270s'),
--   (18,'Vostro 15 3530'),
--   (19,'HP 240 G6 Notebook PC'),
--   (20,'HP EliteBook 745 G4'),
--   (21,'OptiPlex 790');

-- ALTER TABLE cmdb
-- ADD `id_area` int,
-- ADD CONSTRAINT `fk_relacion` 
-- FOREIGN KEY (`id_area`) REFERENCES areas_computers_cmdb(`id_area`) ON DELETE CASCADE;

-- -- UPDATE cmdb SET `id_area` = 1 WHERE area LIKE 'Planta Baja';
-- -- UPDATE cmdb SET `id_area` = 2 WHERE area LIKE 'Piso 1';
-- -- UPDATE cmdb SET `id_area` = 3 WHERE area LIKE 'MZ1';
-- -- UPDATE cmdb SET `id_area` = 4 WHERE area LIKE 'MZ2';
-- -- UPDATE cmdb SET `id_area` = 5 WHERE area LIKE 'MZ3';
-- -- UPDATE cmdb SET `id_area` = 6 WHERE area LIKE 'Zona Segura';
-- -- UPDATE cmdb SET `id_area` = 7 WHERE area LIKE 'Reclutamiento';
-- -- UPDATE cmdb SET `id_area` = 8 WHERE area LIKE 'Caseta';
-- -- UPDATE cmdb SET `id_area` = 9 WHERE area LIKE 'Comedor';
-- -- UPDATE cmdb SET `id_area` = 10 WHERE area LIKE 'CAU';
-- -- UPDATE cmdb SET `id_area` = 11 WHERE area LIKE 'Nómina';
-- -- UPDATE cmdb SET `id_area` = 12 WHERE area LIKE 'Jurídico';
-- -- UPDATE cmdb SET `id_area` = 13 WHERE area LIKE 'Mantenimiento';
-- -- UPDATE cmdb SET `id_area` = 14 WHERE area LIKE 'Enfermería';
-- -- UPDATE cmdb SET `id_area` = 15 WHERE area LIKE 'Seguridad';

-- ALTER TABLE cmdb
-- ADD `id_license` int,
-- ADD CONSTRAINT `fk_relacion` 
-- FOREIGN KEY (`id_license`) REFERENCES licenses_computers_cmdb(`id_license`) ON DELETE CASCADE;

-- ALTER TABLE cmdb
-- ADD `id_model` int,
-- ADD CONSTRAINT `fk_relacion` 
-- FOREIGN KEY (`id_model`) REFERENCES models_computers_cmdb(`id_model`) ON DELETE CASCADE;

-- SELECT cmdb.idMapa, cmdb.netBIOS, cmdb.IP, cmdb.mac, cmdb.ext, cmdb.hash, cmdb.nodo, cmdb.licSiph, cmdb.vlan, cmdb.staff, cmdb.area, cmdb.kc_monitor, cmdb.kc_cpu, cmdb.model, cmdb.serviceTag FROM cmdb;