USE webcau;

CREATE TABLE zones_whitelists_cmdb(
  `id_zone` INT AUTO_INCREMENT NOT NULL,
  `zone` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_zone`)
);

INSERT INTO zones_whitelists_cmdb (`zone`) VALUES ('Bienestar Laboral');
INSERT INTO zones_whitelists_cmdb (`zone`) VALUES ('Blancco');
INSERT INTO zones_whitelists_cmdb (`zone`) VALUES ('Generación de la Información con TDC');
INSERT INTO zones_whitelists_cmdb (`zone`) VALUES ('Supervisores');

-- UPDATE zones_whitelists_cmdb SET zone = ? WHERE id_zone = ?
-- DELETE FROM zones_whitelists_cmdb WHERE id_zone = ?

CREATE TABLE computers_whitelists_cmdb(
  `id_computer` INT AUTO_INCREMENT NOT NULL,
  `netbios` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `id_zone` INT,
  PRIMARY KEY (`id_computer`),
  FOREIGN KEY (`id_zone`) 
  REFERENCES zones_whitelists_cmdb(`id_zone`)
  ON DELETE CASCADE
);

-- INSERT INTO computers_whitelists_cmdb (`netbios`, `email`, `id_zone`) VALUES (?,?,?)
-- UPDATE computers_whitelists_cmdb SET netbios = ?, email = ? WHERE id_computer = ?
-- DELETE FROM computers_whitelists_cmdb WHERE id_computer = ?

CREATE TABLE local_emails_whitelists_cmdb(
  `id_email` INT AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `id_zone` INT,
  PRIMARY KEY (`id_email`),
  FOREIGN KEY (`id_zone`) 
  REFERENCES zones_whitelists_cmdb(`id_zone`)
  ON DELETE CASCADE
);

-- INSERT INTO local_emails_whitelists_cmdb (`email`, `id_zone`) VALUES (?, ?)
-- UPDATE local_emails_whitelists_cmdb SET email = ? WHERE id_email = ?
-- DELETE FROM local_emails_whitelists_cmdb WHERE id_email = ?

CREATE TABLE customers_emails_whitelists_cmdb(
  `id_email` INT AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `id_zone` INT,
  PRIMARY KEY (`id_email`),
  FOREIGN KEY (`id_zone`) 
  REFERENCES zones_whitelists_cmdb(`id_zone`)
  ON DELETE CASCADE
);

-- INSERT INTO customers_emails_whitelists_cmdb (`email`, `id_zone`) VALUES (?, ?)
-- UPDATE customers_emails_whitelists_cmdb SET email = ? WHERE id_email = ?
-- DELETE FROM customers_emails_whitelists_cmdb WHERE id_email = ?