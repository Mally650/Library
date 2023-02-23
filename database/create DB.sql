CREATE DATABASE `Library`;
USE `Library`;
create table `Types`(
`id` int(11) NOT NULL auto_increment,
`name` varchar(50) NOT NULL,
 PRIMARY KEY (`id`)
);
create table `Categories`(
`id` int(11) NOT NULL auto_increment,
`name` varchar(50) NOT NULL,
 PRIMARY KEY (`id`)
);
create table `Columns_Lib`(
`id` int(11) NOT NULL auto_increment,
`name` varchar(50) NOT NULL,
`Category_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `FK_Category_id` (`Category_id`),
  CONSTRAINT `FK_Category_id` FOREIGN KEY (`Category_id`) REFERENCES `Categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE

);
create table `Shelves`(
`id` int(11) NOT NULL auto_increment,
`name` varchar(50) NOT NULL,
`Column_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `FK_Column_id` (`Column_id`),
 CONSTRAINT `FK_Column_id` FOREIGN KEY (`Column_id`) REFERENCES `Columns_Lib` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE

);
create table `auther`(
 `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Persons` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `mail` varchar(50) NOT NULL ,
  `password` varchar(10) NOT NULL,
  `id_Type` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_Type` (`id_Type`),
  CONSTRAINT `FK_id_Type` FOREIGN KEY (`id_Type`) REFERENCES `types` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

create table `Books`(
`id` int(11) NOT NULL auto_increment,
`name` varchar(50) UNIQUE NOT NULL ,
`auther_id` int(11) NOT NULL,
`year` int(4) NOT NULL,
`shelf_id` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `FK_shelf_id` (`shelf_id`),
CONSTRAINT `FK_shelf_id` FOREIGN KEY (`shelf_id`) REFERENCES `Shelves` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
KEY `FK_auther_id` (`auther_id`),
CONSTRAINT `FK_auther_id` FOREIGN KEY (`auther_id`) REFERENCES `auther` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
create table `Status`(
`id` int(11) NOT NULL auto_increment,
`name` varchar(50) NOT NULL,
 PRIMARY KEY (`id`)
);
CREATE TABLE `Books_Status`(
`id` int(11) NOT NULL auto_increment,
`book_id` int(11) NOT NULL,
`status_id` int(11) NOT NULL,
`available` boolean not null,
PRIMARY KEY (`id`),
KEY `FK_book_id` (`book_id`),
CONSTRAINT `FK_book_id` FOREIGN KEY (`book_id`) REFERENCES `Books` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
KEY `FK_status_id` (`status_id`),
CONSTRAINT `FK_status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
create table `Lending`(
`id` int(11) NOT NULL auto_increment,
`book_id` int(11) NOT NULL,
`Persons_id` int(11) NOT NULL,
`returned` boolean not null,
`Date_Lended` date not null,
`Date_returned` date ,
PRIMARY KEY (`id`),
KEY `FK_book_id_Lending` (`book_id`),
CONSTRAINT `FK_book_id_Lending` FOREIGN KEY (`book_id`) REFERENCES `Books_Status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
KEY `FK_Persons_id` (`Persons_id`),
CONSTRAINT `FK_Persons_id` FOREIGN KEY (`Persons_id`) REFERENCES `persons` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
create table `Waiting_List`(
`id` int(11) NOT NULL auto_increment,
`book_id` int(11) NOT NULL,
`Persons_id` int(11) NOT NULL,
`recived` boolean not null,
`Date_required` datetime not null,
PRIMARY KEY (`id`),
KEY `FK_book_id_Waiting_List` (`book_id`),
CONSTRAINT `FK_book_id_Waiting_List` FOREIGN KEY (`book_id`) REFERENCES `Books` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
KEY `FK_Persons_id_Waiting_List` (`Persons_id`),
CONSTRAINT `FK_Persons_id_Waiting_List` FOREIGN KEY (`Persons_id`) REFERENCES `persons` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
create table `Messages`(
`id` int(11) NOT NULL auto_increment,
`Persons_id` int(11) NOT NULL,
`recived` boolean not null,
`Date_sent` datetime not null,
PRIMARY KEY (`id`),
KEY `FK_Persons_id_Messages` (`Persons_id`),
CONSTRAINT `FK_Persons_id_Messages` FOREIGN KEY (`Persons_id`) REFERENCES `persons` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
