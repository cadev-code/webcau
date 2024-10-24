CREATE DATABASE IF NOT EXISTS webcau;

USE webcau;

CREATE TABLE areas_laptops_cmdb(
  `id_area` INT NOT NULL AUTO_INCREMENT,
  `area` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_area`)
);

INSERT INTO areas_laptops_cmdb (`area`) VALUES ('Capacitación Soluciones de Pago'),
('Capacitación Soluciones de Pago'),
('Planeación Estrategia, Mejora Continua y Monitoreo'),
('Coordinación Generación de la Información'),
('Capital Humano'),
('Coordinacion de Nomina'),
('Gerencia Operativa BBVA Soluciones de Pago'),
('Gerencia Technology Account Manager');

CREATE TABLE marks_laptops_cmdb(
  `id_mark` INT NOT NULL AUTO_INCREMENT,
  `mark` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_mark`)
);

INSERT INTO marks_laptops_cmdb (`mark`) VALUES ('Hewlett-Packard'),
('Dell'),
('Lenovo');

CREATE TABLE laptops_cmdb(
  `id_laptop` INT NOT NULL AUTO_INCREMENT,
  `id_area` INT NOT NULL,
  `name` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `id_mark`INT NOT NULL,
  `model` VARCHAR(255) NOT NULL, 
  `st` VARCHAR(255) NOT NULL,
  `device` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_laptop`),
  FOREIGN KEY (`id_area`) REFERENCES areas_laptops_cmdb(`id_area`),
  FOREIGN KEY (`id_mark`) REFERENCES marks_laptops_cmdb(`id_mark`)
);

INSERT INTO laptops_cmdb (`id_area`,`name`,`id_mark`,`model`,`st`,`device`) VALUES (1,'Eduardo Antonio Perez Serrano',1,'HP 240 G6 Notebook PC','5CD9016261','Laptop'),
(1,'Jesus Alfredo Sanchez Hidalgo',1,'HP 240 G6 Notebook PC','5CD90162GK','Laptop'),
(1,'Jorge Alan Hernández Valadez',1,'HP 240 G6 Notebook PC','5CD9016242','Laptop'),
(1,'Ivonne Andrea Vargas Reyes',2,'Latitude 3480','6DHW4L2','Laptop'),
(3,'Jose Antonio Constantino Jaimes',1,'HP 240 G6 Notebook PC','5CD901628C','Laptop'),
(4,'Karina Islas Copca',2,'Vostro 15  3530','27XN1Z3','Laptop'),
(5,'Karla Valeria Gallegos Téllez',1,'HP 240 G6 Notebook PC','5CD9016242 ','Laptop'),
(6,'Saul Garcia Corona',2,'Latitude 3480','9LHWL2','Laptop'),
(7,'Cynthia Viviana Carballo Hernandez',1,'HP 240 G6 Notebook PC','5CD9016278','Laptop'),
(8,'Leonel Cruz Gonzalez',1,'HP ZBook 15 G5','5CD8512G4L','Laptop'),
(6,'Saul Garcia Corona',3,'Tab P11','HVA5LLMH','Tablet '),
(6,'Saul Garcia Corona',3,'Cargador y cable','SA 18D24954','Cargador y cable'),
(6,'Saul Garcia Corona',3,'Teclado y Funda','','Teclado y Funda'),
(6,'Saul Garcia Corona',3,'Precision Pen 2','US3223','Precision Pen 2');

CREATE TABLE notes_laptops_cmdb(
  `id_note` INT NOT NULL AUTO_INCREMENT,
  `id_laptop` INT NOT NULL,
  `note` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_note`),
  FOREIGN KEY (`id_laptop`) REFERENCES laptops_cmdb(`id_laptop`)
);

INSERT INTO notes_laptops_cmdb (`id_laptop`, `note`) VALUES (1,'Laptop Nota 1'),
(1,'Laptop Nota 2'),
(2,'Laptop Nota 1'),
(2,'Laptop Nota 2'),
(3,'Laptop Nota 1'),
(3,'Laptop Nota 2'),
(4,'Laptop Nota 1'),
(4,'Laptop Nota 2'),
(5,'Laptop Nota 1'),
(5,'Laptop Nota 2'),
(6,'Laptop Nota 1'),
(6,'Laptop Nota 2'),
(7,'Laptop Nota 1'),
(7,'Laptop Nota 2'),
(8,'Laptop Nota 1'),
(8,'Laptop Nota 2'),
(9,'Laptop Nota 1'),
(9,'Laptop Nota 2'),
(10,'Laptop Nota 1'),
(10,'Laptop Nota 2'),
(11,'Laptop Nota 1'),
(11,'Laptop Nota 2'),
(12,'Laptop Nota 1'),
(12,'Laptop Nota 2'),
(13,'Laptop Nota 1'),
(13,'Laptop Nota 2'),
(14,'Laptop Nota 1'),
(14,'Laptop Nota 2');
