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