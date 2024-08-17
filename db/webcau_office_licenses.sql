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
-- Table structure for table `office_licenses`
--

CREATE DATABASE IF NOT EXISTS webcau;

use webcau;

DROP TABLE IF EXISTS `office_licenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `office_licenses` (
  `licensID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(36) NOT NULL,
  `amount` int NOT NULL,
  `amount_occupied` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`licensID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office_licenses`
--

LOCK TABLES `office_licenses` WRITE;
/*!40000 ALTER TABLE `office_licenses` DISABLE KEYS */;
INSERT INTO `office_licenses` VALUES (5,'Prueba1','Prueba1','Prueba1',6,3),(15,'Prueba 2','Prueba 2','Prueba 2',3,1),(16,'fads','fasdfasdf','sadfasdf',1,0),(17,'fsadfa','sdfasdf','asdf',1,0),(18,'sfdasd','fasdf','dasf',1,0),(19,'asdfsdf','sdfsd','fsda',1,0),(20,'asfdsdf','sdaf','saffd',1,0),(21,'afsdasdf','asdfsdf','sdfsdf',1,0),(22,'sdfasdf','sdafasdf','asdfsdf',1,0),(23,'asdfasdf','fsdfaf','asfasdf',1,0),(24,'asdfsd','fasdfsdaf','sdfasf',1,0);
/*!40000 ALTER TABLE `office_licenses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19 22:29:22
