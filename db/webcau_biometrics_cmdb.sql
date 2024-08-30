CREATE TABLE campaigns_biometrics_cmdb(
  `id_campaign` INT AUTO_INCREMENT NOT NULL,
  `campaign` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_campaign`)
);

INSERT INTO campaigns_biometrics_cmdb (`campaign`) VALUES ('SMART CENTER'),
('BBVA'),
('INFRA');

CREATE TABLE marks_biometrics_cmdb(
  `id_mark` INT AUTO_INCREMENT NOT NULL,
  `mark` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_mark`)
);

INSERT INTO marks_biometrics_cmdb (`mark`) VALUES ('ZKTeco Inc'),
('INFRA');

CREATE TABLE models_biometrics_cmdb(
  `id_model` INT AUTO_INCREMENT NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_model`)
);

INSERT INTO models_biometrics_cmdb (`model`) VALUES ('F18/HID'),
('F18'),
('MB160'),
('F4VISTA'),
('F18/M');

CREATE TABLE assignments_biometrics_cmdb(
  `id_assignment` INT AUTO_INCREMENT NOT NULL,
  `assignment` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_assignment`)
);

INSERT INTO assignments_biometrics_cmdb (`assignment`) VALUES ('Comedor'),
('Discado'),
('Nomina'),
('Nomina 2'),
('Acceso caseta'),
('Torniquetes'),
('SITE');

CREATE TABLE devices_biometrics_cmdb(
  `id_device` INT AUTO_INCREMENT NOT NULL,
  `id_assignment` INT NOT NULL,
  `id_campaign` INT NOT NULL,
  `id_mark` INT NOT NULL,
  `id_model` INT NOT NULL,
  `serial_number` VARCHAR(255) NOT NULL,
  `ip` VARCHAR(255) NOT NULL,
  `mac` VARCHAR(255) NOT NULL,
  `user` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_device`),
  FOREIGN KEY (`id_assignment`) REFERENCES assignments_biometrics_cmdb(`id_assignment`),
  FOREIGN KEY (`id_campaign`) REFERENCES campaigns_biometrics_cmdb(`id_campaign`),
  FOREIGN KEY (`id_mark`) REFERENCES marks_biometrics_cmdb(`id_mark`),
  FOREIGN KEY (`id_model`) REFERENCES models_biometrics_cmdb(`id_model`)
);

INSERT INTO devices_biometrics_cmdb (`id_assignment`, `id_campaign`, `id_mark`, `id_model`, `serial_number`, `ip`, `mac`, `user`, `password`) 
VALUES (1, 1, 1, 1, "AIP3182960082", "172.15.106.124", "00:17:61::11:39:D9", "N/A", "N/A");