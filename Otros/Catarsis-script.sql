DROP DATABASE IF EXISTS `CATARSIS`;
CREATE DATABASE IF NOT EXISTS `CATARSIS`;
USE `CATARSIS`;
CREATE TABLE `productos` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(100),
   `precio` FLOAT,
   `descripcion` TEXT,
   `descuento` INT,
   `categoria_id` INT,
   `imagen_producto` VARCHAR(100),
   PRIMARY KEY (`id`)
);

CREATE TABLE `usuarios` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(100),
   `apellido` VARCHAR(100),
   `correo` VARCHAR(200),
   `contrasenia` VARCHAR(100),
   `imagen_perfil` VARCHAR(100),
   `ocupacion_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categorias` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `ocupacion` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(100),
   PRIMARY KEY (`id`)
);


ALTER TABLE `productos` ADD CONSTRAINT `FK_8db972d3-ce40-4a75-a1c4-25e34f6ec271` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`)  ;

ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2232d242-0f9f-47cd-8a39-c0e2e9379d34` FOREIGN KEY (`ocupacion_id`) REFERENCES `ocupacion`(`id`)  ;
