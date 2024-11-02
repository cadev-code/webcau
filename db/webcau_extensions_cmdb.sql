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
  `id_site` INT NOT NULL AUTO_INCREMENT,
  `site` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_site`)
);

CREATE TABLE extensions_cmdb(
  `id_extension` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `id_area` INT NOT NULL,
  `id_type` INT NOT NULL,
  `extension_number` VARCHAR(255) NOT NULL,
  `id_site` INT NOT NULL,
  `ticket` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_extension`),
  FOREIGN KEY (`id_area`) REFERENCES areas_extensions_cmdb(`id_area`),
  FOREIGN KEY (`id_type`) REFERENCES types_extensions_cmdb(`id_type`),
  FOREIGN KEY (`id_site`) REFERENCES sites_extensions_cmdb(`id_site`)
);