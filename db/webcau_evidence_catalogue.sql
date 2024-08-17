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
-- Table structure for table `evidence_catalogue`
--

CREATE DATABASE IF NOT EXISTS webcau;

use webcau;

DROP TABLE IF EXISTS `evidence_catalogue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evidence_catalogue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  `title` varchar(120) NOT NULL,
  `destination` varchar(30) NOT NULL,
  `evidence` varchar(800) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evidence_catalogue`
--

LOCK TABLES `evidence_catalogue` WRITE;
/*!40000 ALTER TABLE `evidence_catalogue` DISABLE KEYS */;
INSERT INTO `evidence_catalogue` VALUES (1,'incidencia','Incidencia con el Visor (caida o interrupción)','IDS','Se saca captura de la incidencia y se menciona en el ticket la vista donde se obtiene la incidencia las vistas posibles son:<br>1) Tiempos de Conexión<br>2) Visor Asesor<br>3) Irene<br>4) Productividad<br>5) Tiempo de Conexión en adeudo<br>6) Conexión acumulada<br>7) Promesas<br>8) Contactación<br>9) Guía Experiencia<br>10) Modificación/Baja Cedulas<br>11) Dispersión de Cuadrantes'),(2,'incidencia','Incidencia con el SIVATEC (caida o interrupción)','IDS/CAU','Por parte de cau se valida que se tengan los paquetes de instalacion, certificados de seguridad y permisos, si la incidencia continua se debera obtener una captura de la incidencia y desde que usuario se esta logueando.'),(3,'incidencia','Incidencia con el Intranet (caida o interrupción)','IDS','Se obtiene una captura de la incidencia mostrada en intranet y se envia a IDS mencionando el error.'),(4,'incidencia','No cuenta con direccionamiento IP','InfraComm','Se ejecuta en cmd el comando ipconfig /release y porteriormente terminacion /renew, porterior a ello realizar un ping al gateway o un servidor de InfraComm.'),(5,'incidencia','No se puede habilitar la licencia de SIP Phone','InfraComm','Se valida que se obtenga comunicación con una traza a la liga secure.counterpath.com de no contar con comunicación obtener una captura con la prueba realizada y agregar un ipconfig /all y mandar la prueba al area de InfraComm junto con el formato 8.'),(6,'incidencia','No muestra los marcadores en Firefox ','CAU','Presionar CTRL + H para mostrar los marcadores.'),(7,'incidencia','No abre aplicaciones / operativo','InfraComm','Verificar si la incidencia continua en otra vlan, Realizar un tracert a la liga y verificar si se cuenta con comunicación si se llega al HSRP escalar con banco de lo contrario al area de InfraComm.'),(8,'incidencia','No abre aplicaciones / administrativo','InfraComm','Realizar un tracert a la liga y verificar si se cuenta con comunicación de lo contrario validar en un equipo que cuente con las mismas politicas si tiene acceso.'),(9,'incidencia','Problemas de audio en la diadema','CAU','Conectar la diadema y verificar si el siphone esta detectando en caso de ser asi unicamente en los apartados de preferencia seleccionar el modelo de la diadema.'),(10,'incidencia','Expiro la licencia de office para personal administrativo','CAU','Conectar el equipo al hotspot y colocar correo y contraseña de la licencia.'),(11,'incidencia','No envia o recibe correos','Triara / InfraComm','Realizar un telnet al servidor de correo mailc75.carrierzone.com uno al puerto de entrada y otro al puerto de salida, de lo contrario realizar la prueba de que correos tienen la incidencia y en que vlan estan los equipos.'),(12,'incidencia','No puede enviar a algun destinatario de correo','InfraComm/CAU','CAU valida que no este enviando informacion sensible en caso contrario se solicita a InfraComm agregar la cuenta a la lista blanca del remitente con el formato 16 Telnet.'),(13,'incidencia','No puede enviar a algun destinatario de correo','InfraComm/CAU','CAU valida que no este enviando informacion sensible en caso contrario se solicita a InfraComm agregar la cuenta a la lista blanca del remitente con el formato 16 Telnet.'),(14,'incidencia','No se visualizan las camaras de CCTV','CAU','Verificar que las camaras esten correctamente configuradas.'),(15,'incidencia','No hay conexión con las camaras de CCTV','CAU','Verificar si la camara la ve el monitorista o caseta.<br>Validar conectividad TCP/IP a traves de un ping.'),(16,'incidencia','No hay conexión con las camaras de CCTV','CAU','Verificar si la camara la ve el monitorista o caseta.<br>Validar conectividad TCP/IP a traves de un ping.'),(17,'solicitud','Solicitud de re-procesos del Visor','IDS','Se solicita al area de CISO VoBo de la solicitud y se envia a IDS VoBo con solicitud y archivo para reprocesar.'),(18,'solicitud','Solicitud de cambios y/o información de la Intranet','IDS','Se solicita al area de CISO VoBo de la solicitud y se envia a IDS VoBo con archivo de los cambios.'),(19,'solicitud','Solicitud de cambio de posicion de supervisores','CAU/InfraComm','Se hacen los cambios de posicion y se envia al area de InfraComm con el formato 2 \"Cambio de posicion de estacion de trabajo\".'),(20,'solicitud','Solicitud de cambio de toner en las impresoras','CAU','Se envia el ticket a Helpdesk@smart-center.com solicitando el cambio, CAU realiza el cambio.'),(21,'solicitud','Solicitud para incluir destinatarios en Listas Blancas','CISO/InfraComm','Se envia el ticket con el formato 16 a sgsi_oda para que se otorgue el VoBo y cuando se tenga el VoBo se envia a InfraComm.'),(22,'solicitud','Creacion de Listas Blancas','InfraComm','Se envia formato 16 a CISO, el VoBo se envia a InfraComm para realizar el cambio el LB´s.'),(23,'solicitud','Creacion de usuarios dominio, personalizados, escritorio limpio','InfraComm','Se envia el formato 5, se menciona si debe haber cambio de contraseña en el primer logeo y la contraseña asiganada.'),(24,'solicitud','Solicitud de permisos de navegación','InfraComm','Se envia el formato 8, se menciona el lapso de tiempo que se brindara el permiso.'),(25,'solicitud','Solicitud de copia de archivos para capacitación','CAU/CISO','Se envia la solicitud a CISO para otorgar el VoBo, se colocan los archivos y se borran en el tiempo indicado.'),(26,'solicitud','Solicitud de acceso a recursos compartidos','InfraComm/CISO/CAU','Se envia el formato 1 a CISO para el VoBo, se envia a InfraComm para los cambiosy CAU  coloca acceso directo.'),(27,'solicitud','Solicitud de instalación de aplicactivos','CAU','Se envia a CISO solicitud de aplicativos para VoBo y CAU instala.'),(28,'solicitud','Restablecer  o desbloquear contraseña de usuario personalizado','CAU','Se envia ticket con Username del usuario y CAU Resetea contraseña.'),(29,'solicitud','Solicitud de ID de impresión','CAU Viga','Se envia el ticket al Gerente Carlos Pizaño para que realice la creacion de ID´s.');
/*!40000 ALTER TABLE `evidence_catalogue` ENABLE KEYS */;
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
