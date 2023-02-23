INSERT INTO `library`.`types` (`name`) VALUES ('מנהל');
INSERT INTO `library`.`types` (`name`) VALUES ('ספרן');
INSERT INTO `library`.`types` (`name`) VALUES ('לקוח');

INSERT INTO `library`.`status` (`name`) VALUES ('חדש');
INSERT INTO `library`.`status` (`name`) VALUES ('טוב');
INSERT INTO `library`.`tatus` (`name`) VALUES ('פגום');

INSERT INTO `library`.`categories` (`name`) VALUES ('מיסתורין');
INSERT INTO `library`.`categories` (`name`) VALUES ('מדע');
INSERT INTO `library`.`categories` (`name`) VALUES ('היסטוריה');
INSERT INTO `library`.`categories` (`name`) VALUES ('פנטזיה');
INSERT INTO `library`.`categories` (`name`) VALUES ('מוזיקה');
INSERT INTO `library`.`categories` (`name`) VALUES ('מתמטיקה');
INSERT INTO `library`.`categories` (`name`) VALUES ('רפואי');

INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('1', '2');
INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('3', '2');
INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('2', '3');
INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('4', '3');
INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('5', '1');
INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('6', '6');
INSERT INTO `library`.`columns_lib` (`name`, `Category_id`) VALUES ('7', '4');

INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('1', '1');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('2', '1');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('3', '1');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('4', '1');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('1', '2');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('2', '2');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('3', '2');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('4', '2');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('1', '6');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('2', '6');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('3', '6');
INSERT INTO `library`.`shelves` (`name`, `Column_id`) VALUES ('4', '6');

INSERT INTO `library`.`auther` (`name`) VALUES ('מנוחה פוקס');
INSERT INTO `library`.`auther` (`name`) VALUES ('נחמן סלצר');
INSERT INTO `library`.`auther` (`name`) VALUES ('חיים גרינבוים');
INSERT INTO `library`.`auther` (`name`) VALUES ('מיה קינן');
INSERT INTO `library`.`auther` (`name`) VALUES ('חבצלת');
INSERT INTO `library`.`auther` (`name`) VALUES ('אפרת ויס');

INSERT INTO `library`.`persons` (`id`, `name`, `address`, `phone`, `mail`, `password`, `id_Type`) VALUES ('222222222', 'אפרת ויס', 'נויפלד 9', '0504162222', 'e@gmail.com', '123456', '1');
INSERT INTO `library`.`persons` (`id`, `name`, `address`, `phone`, `mail`, `password`, `id_Type`) VALUES ('111111111', 'יאיר רקובסקי', 'חוני המעגל 30', '0511236457', 'e@gmail.com', '123456', '2');
INSERT INTO `library`.`persons` (`id`, `name`, `address`, `phone`, `mail`, `password`, `id_Type`) VALUES ('333333333', 'דבי כהן', 'אולדליח 8', '0988765432', 'e@gmail.com', '123456', '3');


