USE viga_web;

-- licencias Siphone

CREATE TABLE licenses_computers_cmdb(
  `id_license` INT AUTO_INCREMENT,
  `license` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_license`)
) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO licenses_computers_cmdb (`id_license`, `license`) VALUES (1, 'No Aplica');

-- modelos equipos

CREATE TABLE models_computers_cmdb(
  `id_model` INT AUTO_INCREMENT,
  `model` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_model`)
) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO models_computers_cmdb (`id_model`,`model`) VALUES (1,'Sin Asignar');

-- origen de equipos

CREATE TABLE origins_computers_cmdb (
  `id_origin` INT AUTO_INCREMENT,
  `origin` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_origin`)
);

-- áreas

CREATE TABLE areas_computers_cmdb(
  `id_area` INT AUTO_INCREMENT,
  `area` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_area`)
) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- equipos

CREATE TABLE `computers_cmdb` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idMapa` VARCHAR(32) DEFAULT NULL,
  `netBIOS` VARCHAR(24) DEFAULT NULL,
  `IP` VARCHAR(24) DEFAULT NULL,
  `mac` VARCHAR(24) DEFAULT NULL,
  `ext` VARCHAR(16) DEFAULT NULL,
  `hash` VARCHAR(150) DEFAULT NULL,
  `nodo` VARCHAR(24) DEFAULT NULL,
  `licSiph` VARCHAR(150) DEFAULT NULL,
  `vlan` VARCHAR(30) DEFAULT NULL,
  `staff` VARCHAR(180) DEFAULT NULL,
  `area` VARCHAR(180) DEFAULT NULL,
  `kc_monitor` VARCHAR(26) DEFAULT NULL,
  `kc_cpu` VARCHAR(26) DEFAULT NULL,
  `model` VARCHAR(255) DEFAULT NULL,
  `serviceTag` VARCHAR(255) DEFAULT NULL,
  `id_license` INT NOT NULL,
  `id_model` INT NOT NULL,
  `id_origin` INT NOT NULL,
  `id_area` INT,
  FOREIGN KEY (`id_license`) REFERENCES licenses_computers_cmdb(`id_license`),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_model`) REFERENCES models_computers_cmdb(`id_model`),
  FOREIGN KEY (`id_origin`) REFERENCES origins_computers_cmdb(`id_origin`),
  FOREIGN KEY (`id_area`) REFERENCES areas_computers_cmdb(`id_area`)
) ENGINE=InnoDB AUTO_INCREMENT=2860 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;