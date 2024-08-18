use webcau;

CREATE TABLE areas_resources_cmdb(
  `id_area` INT NOT NULL AUTO_INCREMENT,
  `area` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_area`)
);

CREATE TABLE resources_cmdb(
  `id_resource` INT NOT NULL AUTO_INCREMENT,
  `resource_name` VARCHAR(255) NOT NULL,
  `capacity` INT NOT NULL,
  `id_area` INT,
  PRIMARY KEY (`id_resource`),
  FOREIGN KEY (`id_area`) REFERENCES `areas_resources_cmdb` (`id_area`) ON DELETE CASCADE
);

CREATE TABLE files_resources_cmdb(
  `id_file` INT NOT NULL AUTO_INCREMENT,
  `filename` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `id_resource` INT,
  PRIMARY KEY (`id_file`),
  FOREIGN KEY (`id_resource`) REFERENCES `resources_cmdb` (`id_resource`) ON DELETE CASCADE
);

CREATE TABLE resources_directory_cmdb(
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `id_resource` INT NOT NULL,
  `permissions` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_user`) REFERENCES `users_directory_cmdb` (`id_user`),
  FOREIGN KEY (`id_resource`) REFERENCES `resources_cmdb` (`id_resource`)
);