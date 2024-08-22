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