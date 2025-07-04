use webcau;

CREATE TABLE hardening (
  id INT AUTO_INCREMENT PRIMARY KEY,
  policy_description  VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  checked BOOLEAN NOT NULL,
  gpo VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
);