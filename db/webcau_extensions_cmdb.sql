CREATE DATABASE IF NOT EXISTS webcau;

USE webcau;

CREATE TABLE areas_extensions_cmdb(
  `id_area` INT NOT NULL AUTO_INCREMENT,
  `area` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_area`)
);