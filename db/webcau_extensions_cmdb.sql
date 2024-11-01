CREATE DATABASE IF NOT EXISTS webcau;

USE webcau;

CREATE TABLE areas_extensions_cmdb(
  `id_area` INT NOT NULL AUTO_INCREMENT,
  `area` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_area`)
);

CREATE TABLE types_extensions_cmdb(
  `id_type` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_type`)
);

CREATE TABLE sites_extensions_cmdb(
  `id_site` INTO NOT NULL AUTO_INCREMENT,
  `site` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_site`)
);