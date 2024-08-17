CREATE TABLE origin_computers_cmdb (
  `id_origin` INT AUTO_INCREMENT,
  `origin` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_origin`)
);

INSERT INTO origin_computers_cmdb (`origin`) VALUES 
  ('Smart'),
  ('Rentado'),
  ('Affinitas');

ALTER TABLE cmdb
ADD `id_origin` int DEFAULT 1,
ADD CONSTRAINT `fk_relacion3` 
FOREIGN KEY (`id_origin`) REFERENCES origin_computers_cmdb(`id_origin`) ON DELETE CASCADE;