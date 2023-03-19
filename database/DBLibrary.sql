-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `auther`
--

DROP TABLE IF EXISTS `auther`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auther` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auther`
--

LOCK TABLES `auther` WRITE;
/*!40000 ALTER TABLE `auther` DISABLE KEYS */;
INSERT INTO `auther` VALUES (1,'מנוחה פוקס'),(2,'נחמן סלצר'),(3,'חיים גרינבוים'),(4,'מיה קינן'),(5,'חבצלת'),(6,'אפרת ויס'),(7,''),(8,'sadasd'),(9,'Rachel Choter'),(10,'sdfsd'),(11,'רחלי'),(12,'רחלי');
/*!40000 ALTER TABLE `auther` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `auther_id` int NOT NULL,
  `year` int NOT NULL,
  `shelf_id` int NOT NULL,
  `imageName` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `FK_shelf_id` (`shelf_id`),
  KEY `FK_auther_id` (`auther_id`),
  CONSTRAINT `FK_auther_id` FOREIGN KEY (`auther_id`) REFERENCES `auther` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `FK_shelf_id` FOREIGN KEY (`shelf_id`) REFERENCES `shelves` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (6,'דזה וו',4,2020,4,'דזה_וו'),(7,'הולכת בשבילה',4,2020,4,'הולכת_בשבילה'),(8,'הכובש מחבל גרנדה',4,2020,4,'הכובש_מחבל_גרנדה'),(9,'הם למדו לקח',4,2020,4,'הם_למדו_לקח'),(10,'הם עשו את זה',4,2020,4,'הם_עשו_את_זה'),(11,'המחוג הרביעי',4,2020,4,'המחוג_הרביעי'),(12,'לא שאלתי',4,2020,4,'לא_שאלתי'),(13,'להי נאאר',4,2020,4,'להי_נאאר'),(14,'נשאר מאחור',4,2020,4,'נשאר_מאחור'),(15,'סונקה',4,2020,4,'סונקה'),(16,'פדהאל',4,2020,4,'פדהאל'),(17,'פטרבורג',4,2020,4,'פטרבורג'),(18,'פרצנס בסמטה',4,2020,4,'פרצנס_בסמטה'),(19,'שיחות ללא הגבלה',4,2020,4,'שיחות_ללא_הגבלה'),(20,'שדג',1,23423,13,'נשאר_מאחור');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_status`
--

DROP TABLE IF EXISTS `books_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `status_id` int NOT NULL,
  `available` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_book_id` (`book_id`),
  KEY `FK_status_id` (`status_id`),
  CONSTRAINT `FK_book_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `FK_status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_status`
--

LOCK TABLES `books_status` WRITE;
/*!40000 ALTER TABLE `books_status` DISABLE KEYS */;
INSERT INTO `books_status` VALUES (19,9,1,1),(20,9,1,1),(21,19,1,1),(22,20,1,1),(23,20,1,1),(24,20,1,1),(25,20,1,1),(26,19,1,1),(27,17,1,1),(28,11,1,1),(29,12,1,1);
/*!40000 ALTER TABLE `books_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'מיסתורין'),(2,'מדע'),(3,'היסטוריה'),(4,'פנטזיה'),(5,'מוזיקה'),(6,'מתמטיקה'),(7,'רפואי'),(8,'משעמם');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `columns_lib`
--

DROP TABLE IF EXISTS `columns_lib`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `columns_lib` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `Category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Category_id` (`Category_id`),
  CONSTRAINT `FK_Category_id` FOREIGN KEY (`Category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `columns_lib`
--

LOCK TABLES `columns_lib` WRITE;
/*!40000 ALTER TABLE `columns_lib` DISABLE KEYS */;
INSERT INTO `columns_lib` VALUES (1,'1',2),(2,'3',2),(3,'2',3),(4,'4',3),(5,'5',1),(6,'6',6),(7,'7',4);
/*!40000 ALTER TABLE `columns_lib` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lending`
--

DROP TABLE IF EXISTS `lending`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lending` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `Persons_id` int NOT NULL,
  `returned` tinyint(1) NOT NULL,
  `Date_Lended` date NOT NULL,
  `Date_returned` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_book_id_Lending` (`book_id`),
  KEY `FK_Persons_id` (`Persons_id`),
  CONSTRAINT `FK_book_id_Lending` FOREIGN KEY (`book_id`) REFERENCES `books_status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `FK_Persons_id` FOREIGN KEY (`Persons_id`) REFERENCES `persons` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lending`
--

LOCK TABLES `lending` WRITE;
/*!40000 ALTER TABLE `lending` DISABLE KEYS */;
INSERT INTO `lending` VALUES (15,19,333333333,0,'2023-02-14','2023-02-14'),(16,19,333333333,0,'2023-02-18','2023-02-18'),(17,22,333333333,1,'2023-02-18','2023-02-19'),(18,21,333333333,0,'2023-02-18','2023-02-18');
/*!40000 ALTER TABLE `lending` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Persons_id` int NOT NULL,
  `recived` tinyint(1) NOT NULL,
  `Date_sent` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Persons_id_Messages` (`Persons_id`),
  CONSTRAINT `FK_Persons_id_Messages` FOREIGN KEY (`Persons_id`) REFERENCES `persons` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `id_Type` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_Type` (`id_Type`),
  CONSTRAINT `FK_id_Type` FOREIGN KEY (`id_Type`) REFERENCES `types` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=333333335 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` VALUES (111111111,'יאיר רקובסקי','חוני המעגל 30','0511236457','e@gmail.com','123456',2),(222222222,'אפרת ויס','נויפלד 9','0504162222','e@gmail.com','123456',1),(333333333,'דבי כהן','אולדליח 8','0988765432','e@gmail.com','123456',3),(333333334,'afasfas','הירדן 20','0548523852','racheli.choter@gmail.com','1234',3);
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelves`
--

DROP TABLE IF EXISTS `shelves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `Column_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Column_id` (`Column_id`),
  CONSTRAINT `FK_Column_id` FOREIGN KEY (`Column_id`) REFERENCES `columns_lib` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelves`
--

LOCK TABLES `shelves` WRITE;
/*!40000 ALTER TABLE `shelves` DISABLE KEYS */;
INSERT INTO `shelves` VALUES (1,'1',1),(2,'2',1),(3,'3',1),(4,'4',1),(5,'1',2),(6,'2',2),(7,'3',2),(8,'4',2),(9,'1',6),(10,'2',6),(11,'3',6),(12,'4',6),(13,'1',5),(14,'',2);
/*!40000 ALTER TABLE `shelves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'חדש'),(2,'טוב'),(3,'פגום');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'מנהל'),(2,'ספרן'),(3,'לקוח');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waiting_list`
--

DROP TABLE IF EXISTS `waiting_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `waiting_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `Persons_id` int NOT NULL,
  `recived` tinyint(1) NOT NULL,
  `Date_required` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_book_id_Waiting_List` (`book_id`),
  KEY `FK_Persons_id_Waiting_List` (`Persons_id`),
  CONSTRAINT `FK_book_id_Waiting_List` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `FK_Persons_id_Waiting_List` FOREIGN KEY (`Persons_id`) REFERENCES `persons` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waiting_list`
--

LOCK TABLES `waiting_list` WRITE;
/*!40000 ALTER TABLE `waiting_list` DISABLE KEYS */;
INSERT INTO `waiting_list` VALUES (10,8,333333333,0,'2023-02-15 00:25:00'),(11,7,333333333,0,'2023-02-15 00:25:00'),(12,7,333333333,0,'2023-02-18 23:03:00'),(13,12,333333333,0,'2023-02-18 23:47:00');
/*!40000 ALTER TABLE `waiting_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-19 20:22:26
