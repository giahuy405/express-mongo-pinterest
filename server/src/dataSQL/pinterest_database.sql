-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: pinterest
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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `image_id` int NOT NULL,
  `date_comment` date DEFAULT NULL,
  `content_comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `img` (`img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,2,'2023-04-28','Great picture!'),(2,2,1,'2023-04-29','Beautiful scenery'),(3,3,3,'2023-04-30','Nice shot!'),(4,4,4,'2023-04-30','Amazing!'),(5,5,5,'2023-05-01','Love it!'),(6,6,6,'2023-05-01','Stunning!'),(7,7,7,'2023-05-01','Great composition'),(8,8,8,'2023-05-01','Awesome colors!'),(9,9,9,'2023-05-01','Incredible!'),(10,10,10,'2023-05-01','Beautiful sunset');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img`
--

DROP TABLE IF EXISTS `img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `img` (
  `img_id` int NOT NULL AUTO_INCREMENT,
  `img_name` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `img_description` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`img_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `img_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img`
--

LOCK TABLES `img` WRITE;
/*!40000 ALTER TABLE `img` DISABLE KEYS */;
INSERT INTO `img` VALUES (1,'img1','https://example.com/img1.jpg','Image 1',1),(2,'img2','https://example.com/img2.jpg','Image 2',2),(3,'img3','https://example.com/img3.jpg','Image 3',3),(4,'img4','https://example.com/img4.jpg','Image 4',4),(5,'img5','https://example.com/img5.jpg','Image 5',5),(6,'img6','https://example.com/img6.jpg','Image 6',6),(7,'img7','https://example.com/img7.jpg','Image 7',7),(8,'img8','https://example.com/img8.jpg','Image 8',8),(9,'img9','https://example.com/img9.jpg','Image 9',9),(10,'img10','https://example.com/img10.jpg','Image 10',10);
/*!40000 ALTER TABLE `img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `save_img`
--

DROP TABLE IF EXISTS `save_img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `save_img` (
  `save_img_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `img_id` int NOT NULL,
  `date_save_img` date DEFAULT NULL,
  PRIMARY KEY (`save_img_id`),
  KEY `user_id` (`user_id`),
  KEY `img_id` (`img_id`),
  CONSTRAINT `save_img_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `save_img_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `img` (`img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `save_img`
--

LOCK TABLES `save_img` WRITE;
/*!40000 ALTER TABLE `save_img` DISABLE KEYS */;
INSERT INTO `save_img` VALUES (1,1,2,'2023-04-28'),(2,2,1,'2023-04-29'),(3,3,3,'2023-04-30'),(4,4,4,'2023-04-30'),(5,5,5,'2023-05-01'),(6,6,6,'2023-05-01'),(7,7,7,'2023-05-01'),(8,8,8,'2023-05-01'),(9,9,9,'2023-05-01'),(10,10,10,'2023-05-01');
/*!40000 ALTER TABLE `save_img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'john.doe@example.com','password1','John Doe',30,'https://example.com/avatar1.jpg'),(2,'jane.doe@example.com','password2','Jane Doe',25,'https://example.com/avatar2.jpg'),(3,'jim.smith@example.com','password3','Jim Smith',40,'https://example.com/avatar3.jpg'),(4,'julia.brown@example.com','password4','Julia Brown',22,'https://example.com/avatar4.jpg'),(5,'robert.white@example.com','password5','Robert White',35,'https://example.com/avatar5.jpg'),(6,'lisa.gray@example.com','password6','Lisa Gray',28,'https://example.com/avatar6.jpg'),(7,'mike.taylor@example.com','password7','Mike Taylor',45,'https://example.com/avatar7.jpg'),(8,'emily.jones@example.com','password8','Emily Jones',27,'https://example.com/avatar8.jpg'),(9,'steve.johnson@example.com','password9','Steve Johnson',33,'https://example.com/avatar9.jpg'),(10,'susan.davis@example.com','password10','Susan Davis',31,'https://example.com/avatar10.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-01 16:41:03
