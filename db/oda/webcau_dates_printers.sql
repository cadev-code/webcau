-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: webcau
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dates_printers`
--

CREATE DATABASE IF NOT EXISTS webcau;

use webcau;

DROP TABLE IF EXISTS `dates_printers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dates_printers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year_` int NOT NULL,
  `month_` varchar(16) NOT NULL,
  `date_` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dates_printers`
--

LOCK TABLES `dates_printers` WRITE;
/*!40000 ALTER TABLE `dates_printers` DISABLE KEYS */;
INSERT INTO `dates_printers` VALUES (1,2023,'Julio','04/07/2023'),(2,2023,'Julio','11/07/2023'),(3,2023,'Julio','18/07/2023'),(4,2023,'Julio','25/07/2023'),(5,2023,'Agosto','01/08/2023'),(6,2023,'Agosto','08/08/2023'),(7,2023,'Agosto','15/08/2023'),(8,2023,'Agosto','22/08/2023'),(9,2023,'Agosto','29/08/2023'),(10,2023,'Septiembre','05/09/2023'),(11,2023,'Septiembre','12/09/2023'),(12,2023,'Septiembre','19/09/2023'),(13,2023,'Septiembre','26/09/2023'),(14,2023,'Octubre','03/10/2023'),(15,2023,'Octubre','10/10/2023'),(16,2023,'Octubre','17/10/2023'),(17,2023,'Octubre','24/10/2023'),(18,2023,'Octubre','31/10/2023'),(19,2023,'Noviembre','07/11/2023'),(20,2023,'Noviembre','14/11/2023'),(21,2023,'Noviembre','21/11/2023'),(22,2023,'Noviembre','28/11/2023'),(23,2023,'Diciembre','05/12/2023'),(24,2023,'Diciembre','12/12/2023'),(25,2023,'Diciembre','19/12/2023'),(26,2023,'Diciembre','26/12/2023'),(27,2024,'Enero','02/01/2024'),(28,2024,'Enero','09/01/2024'),(29,2024,'Enero','16/01/2024'),(30,2024,'Enero','23/01/2024'),(31,2024,'Enero','30/01/2024'),(32,2024,'Febrero','06/02/2024'),(33,2024,'Febrero','13/02/2024'),(34,2024,'Febrero','20/02/2024'),(35,2024,'Febrero','27/02/2024'),(36,2024,'Marzo','05/03/2024'),(37,2024,'Marzo','12/03/2024'),(38,2024,'Marzo','19/03/2024'),(39,2024,'Marzo','26/03/2024'),(40,2024,'Abril','02/04/2024'),(41,2024,'Abril','09/04/2024'),(42,2024,'Abril','16/04/2024'),(43,2024,'Abril','23/04/2024'),(44,2024,'Abril','30/04/2024'),(45,2024,'Mayo','07/05/2024'),(46,2024,'Mayo','14/05/2024'),(47,2024,'Mayo','21/05/2024'),(48,2024,'Mayo','28/05/2024'),(49,2024,'Junio','04/06/2024'),(50,2024,'Junio','11/06/2024'),(51,2024,'Junio','18/06/2024'),(52,2024,'Junio','25/06/2024'),(53,2024,'Julio','02/07/2024'),(54,2024,'Julio','09/07/2024'),(55,2024,'Julio','16/07/2024'),(56,2024,'Julio','23/07/2024'),(57,2024,'Julio','30/07/2024'),(58,2024,'Agosto','06/08/2024'),(59,2024,'Agosto','13/08/2024'),(60,2024,'Agosto','20/08/2024'),(61,2024,'Agosto','27/08/2024'),(62,2024,'Septiembre','03/09/2024'),(63,2024,'Septiembre','10/09/2024'),(64,2024,'Septiembre','17/09/2024'),(65,2024,'Septiembre','24/09/2024'),(66,2024,'Octubre','01/10/2024'),(67,2024,'Octubre','08/10/2024'),(68,2024,'Octubre','15/10/2024'),(69,2024,'Octubre','22/10/2024'),(70,2024,'Octubre','29/10/2024'),(71,2024,'Noviembre','05/11/2024'),(72,2024,'Noviembre','12/11/2024'),(73,2024,'Noviembre','19/11/2024'),(74,2024,'Noviembre','26/11/2024'),(75,2024,'Diciembre','03/12/2024'),(76,2024,'Diciembre','10/12/2024'),(77,2024,'Diciembre','17/12/2024'),(78,2024,'Diciembre','24/12/2024'),(79,2024,'Diciembre','31/12/2024'),(80,2025,'Enero','07/01/2025'),(81,2025,'Enero','14/01/2025'),(82,2025,'Enero','21/01/2025'),(83,2025,'Enero','28/01/2025'),(84,2025,'Febrero','04/02/2025'),(85,2025,'Febrero','11/02/2025'),(86,2025,'Febrero','18/02/2025'),(87,2025,'Febrero','25/02/2025'),(88,2025,'Marzo','04/03/2025'),(89,2025,'Marzo','11/03/2025'),(90,2025,'Marzo','18/03/2025'),(91,2025,'Marzo','25/03/2025'),(92,2025,'Abril','01/04/2025'),(93,2025,'Abril','08/04/2025'),(94,2025,'Abril','15/04/2025'),(95,2025,'Abril','22/04/2025'),(96,2025,'Abril','29/04/2025'),(97,2025,'Mayo','06/05/2025'),(98,2025,'Mayo','13/05/2025'),(99,2025,'Mayo','20/05/2025'),(100,2025,'Mayo','27/05/2025'),(101,2025,'Junio','03/06/2025'),(102,2025,'Junio','10/06/2025'),(103,2025,'Junio','17/06/2025'),(104,2025,'Junio','24/06/2025'),(105,2025,'Julio','01/07/2025'),(106,2025,'Julio','08/07/2025'),(107,2025,'Julio','15/07/2025'),(108,2025,'Julio','22/07/2025'),(109,2025,'Julio','29/07/2025'),(110,2025,'Agosto','05/08/2025'),(111,2025,'Agosto','12/08/2025'),(112,2025,'Agosto','19/08/2025'),(113,2025,'Agosto','26/08/2025'),(114,2025,'Septiembre','02/09/2025'),(115,2025,'Septiembre','09/09/2025'),(116,2025,'Septiembre','16/09/2025'),(117,2025,'Septiembre','23/09/2025'),(118,2025,'Septiembre','30/09/2025'),(119,2025,'Octubre','07/10/2025'),(120,2025,'Octubre','14/10/2025'),(121,2025,'Octubre','21/10/2025'),(122,2025,'Octubre','28/10/2025'),(123,2025,'Noviembre','04/11/2025'),(124,2025,'Noviembre','11/11/2025'),(125,2025,'Noviembre','18/11/2025'),(126,2025,'Noviembre','25/11/2025'),(127,2025,'Diciembre','02/12/2025'),(128,2025,'Diciembre','09/12/2025'),(129,2025,'Diciembre','16/12/2025'),(130,2025,'Diciembre','23/12/2025'),(131,2025,'Diciembre','30/12/2025'),(132,2023,'Junio','06/06/2023'),(133,2023,'Junio','13/06/2023'),(134,2023,'Junio','20/06/2023'),(135,2023,'Junio','27/06/2023');
/*!40000 ALTER TABLE `dates_printers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19 22:29:21
