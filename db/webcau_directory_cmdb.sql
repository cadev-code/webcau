CREATE DATABASE IF NOT EXISTS webcau;

USE webcau;

CREATE TABLE `uo_directory_cmdb`(
  `id_uo` INT NOT NULL AUTO_INCREMENT,
  `uo` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_uo`)
);

CREATE TABLE `areas_directory_cmdb`(
  `id_area` INT NOT NULL AUTO_INCREMENT,
  `area` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_area`)
);

CREATE TABLE `domains_directory_cmdb`(
  `id_domain` INT NOT NULL AUTO_INCREMENT,
  `domain` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_domain`)
);

CREATE TABLE `positions_directory_cmdb`(
  `id_position` INT NOT NULL AUTO_INCREMENT,
  `position` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_position`)
);

CREATE TABLE `users_directory_cmdb`(
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `user` VARCHAR(255) NOT NULL,
  `user_x` VARCHAR(255) NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `id_domain` INT,
  `id_uo` INT,
  `id_area` INT,
  `id_position` INT,
  PRIMARY KEY (`id_user`),
  FOREIGN KEY (`id_domain`) REFERENCES `domains_directory_cmdb`(`id_domain`),
  FOREIGN KEY (`id_uo`) REFERENCES `uo_directory_cmdb`(`id_uo`),
  FOREIGN KEY (`id_area`) REFERENCES `areas_directory_cmdb`(`id_area`),
  FOREIGN KEY (`id_position`) REFERENCES `positions_directory_cmdb` (`id_position`)
);