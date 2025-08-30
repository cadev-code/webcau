USE webcau;

CREATE TABLE areas_emails_base(
  `id_area` int AUTO_INCREMENT,
  `area`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_area`)
);

INSERT INTO `areas_emails_base` (`id_area`, `area`) VALUES
(1, 'ADMINISTRATIVO');
INSERT INTO `areas_emails_base` (`id_area`, `area`) VALUES
(2, 'ATRACCIÓN DE TALENTO');
INSERT INTO `areas_emails_base` (`id_area`, `area`) VALUES
(3, 'BBVA COBRANZA - Soluciones de Pago al Cliente');
INSERT INTO `areas_emails_base` (`id_area`, `area`) VALUES
(4, 'CAPITAL HUMANO'),
(5, 'CAU (CENTRO DE ATENCIÓN A USUARIOS)'),
(6, 'CISO'),
(7, 'CONTABILIDAD - NÓMINAS'),
(8, 'DESCONOCIDO'),
(9, 'FACILITIES'),
(10, 'JURÍDICO'),
(11, 'SEGURIDAD'),
(12, 'COMPRAS'),
(13, 'ATRACCIÓN DE TALENTO '),
(14, 'BBVA ASD (AUTO SEGURO DINÁMICO)'),
(15, 'BBVA BANCOMER  TMK - CONSUMO'),
(16, 'BBVA BANCOMER  TMK - SEGUROS'),
(17, 'BBVA BANCOMER  TMK - SEGUROS / BBVA BANCOMER 2 PLAY'),
(18, 'BBVA BANCOMER 2 PLAY'),
(19, 'BBVA BANCOMER  TMK - SEGUROS'),
(20, 'BBVA N2 A N4'),
(21, 'BBVA TDC - EFI'),
(22, 'TECNOLOGÍA - CISO - SEGURIDAD'),
(23, 'UNICEF'),
(24, 'SAMEX'),
(25, 'CAPACITACIÓN'),
(26, 'BBVA CONSUMO'),
(27, 'CONTABILIDAD'),
(28, 'CALIDAD'),
(29, 'GERENTE'),
(30, 'NATURGY'),
(31, 'SERTEC'),
(32, 'TELCEL'),
(33, 'CONSULTORÍA -Ricardo Llanos'),
(34, 'INFRAESTRUCTURA'),
(35, 'IDS'),
(36, 'DIRECTOR'),
(37, 'DIRECCIÓN');

CREATE TABLE sites_emails_base(
  `id_site` int AUTO_INCREMENT,
  `site`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_site`)
);

INSERT INTO `sites_emails_base` (`id_site`, `site`) VALUES
(1, 'ODA');
INSERT INTO `sites_emails_base` (`id_site`, `site`) VALUES
(2, 'VIGA');
INSERT INTO `sites_emails_base` (`id_site`, `site`) VALUES
(3, 'NATIVITAS');
INSERT INTO `sites_emails_base` (`id_site`, `site`) VALUES
(4, 'TECÁMAC'),
(5, 'INFRAESTRUCTURA'),
(6, 'DIRECCIÓN'),
(7, 'IDS');

CREATE TABLE lists_emails_base(
  `id_list` int AUTO_INCREMENT,
  `list`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_list`)
);

INSERT INTO lists_emails_base (`id_list`, `list`) VALUES (1, 'SIN LISTA');

CREATE TABLE registers_emails_base(
  `id_register` int AUTO_INCREMENT,
  `name`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `position`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status`   VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Activo',
  `id_area` int,
  `id_site` int DEFAULT 1,
  PRIMARY KEY (`id_register`),
  FOREIGN KEY (`id_area`) REFERENCES areas_emails_base(`id_area`),
  FOREIGN KEY (`id_site`) REFERENCES sites_emails_base(`id_site`)
);

INSERT INTO registers_emails_base (`name`, `email`, `password`,`position`, `status`, `id_area`, `id_site`) VALUES 
  ('LUIS RICARDO ALAMILLA MORENO', 'alamillal@smart-center.com.mx', 'p4spowwwr4', 'ADMINISTRATIVO', 'Activo', 1, 1);

ALTER TABLE registers_emails_base ADD creation_date DATE NOT NULL DEFAULT '2025-06-25';

CREATE TABLE registers_lists_emails_base(
  `id` INT AUTO_INCREMENT,
  `id_register` INT,
  `id_list` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_register`) REFERENCES registers_emails_base(`id_register`),
  FOREIGN KEY (`id_list`) REFERENCES lists_emails_base(`id_list`)
);
