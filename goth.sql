-- phpMyAdmin SQL Dump
-- version 4.9.7deb1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-11-2021 a las 12:37:53
-- Versión del servidor: 10.5.12-MariaDB-0ubuntu0.21.04.1
-- Versión de PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `goth`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(11) NOT NULL,
  `artista` varchar(50) NOT NULL,
  `album` varchar(50) NOT NULL,
  `cancion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `artista`, `album`, `cancion`) VALUES
(81, 'Lacrimosa', 'Elodia', 'Alleine Zu Zweit'),
(82, 'Lacrimosa', 'Elodia', 'The Turning Point'),
(83, 'The Dresden Dolls', 'Girl Anachronism', 'Girl Anachronism'),
(84, 'The Dresden Dolls', 'Yes, Virginia...', 'Sex Changes'),
(85, 'Blutengel', 'Labyrinth', 'Singing Dead Men'),
(86, 'Nightwish', 'Wishmaster', 'Dead Boy\'s Poem'),
(87, 'The Tiger Lillies', 'Custard Shoe', 'Way On Down'),
(88, 'Nostra Morte', 'Un cuento antes de morir', 'No escuches la voz'),
(89, 'The Gathering', 'Mandylion', 'Eléanor'),
(90, 'Human Drama', 'Cause & Effect', 'Quiet Desperation'),
(91, 'Mono Inc.', 'Nimmermehr', 'Euthanasia'),
(92, 'Siouxsie & The Banshees', 'A Kiss In The Dreamhouse', 'She\'s A Carnival'),
(93, 'Sopor Aeternus & The Ensemble Of Shadows', 'Voyager - The Jugglers Of Jusa', 'The Innocence Of Devils: \"Alone\"'),
(94, 'Xandria', 'Salomé - The Seventh Veil', 'Only For The Stars In Your Eyes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'raul', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
