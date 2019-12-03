-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-12-2019 a las 11:15:51
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bbdd_grupo4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombre`) VALUES
(1, 'junior'),
(2, 'senior'),
(3, 'master');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta`
--

CREATE TABLE `consulta` (
  `idConsulta` int(11) NOT NULL,
  `consulta` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `consulta`
--

INSERT INTO `consulta` (`idConsulta`, `consulta`, `idUsuario`) VALUES
(1, 'eukene crack', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `idEquipo` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`idEquipo`, `nombre`, `logo`, `idCategoria`) VALUES
(1, 'Zornotza Quidditch Junior', 'https://i.pinimg.com/originals/b8/a4/64/b8a464738b1b367f75ad4c240050a73b.jpg', 1),
(2, 'Zornotza Quidditch Senior', 'https://i.pinimg.com/originals/b8/a4/64/b8a464738b1b367f75ad4c240050a73b.jpg', 2),
(3, 'Zornotza Quidditch Master', 'https://i.pinimg.com/originals/b8/a4/64/b8a464738b1b367f75ad4c240050a73b.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `idJugador` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEquipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`idJugador`, `nombre`, `imagen`, `rol`, `telefono`, `idEquipo`) VALUES
(1, 'Eukene', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '629304384', 1),
(2, 'Iker', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '603059303', 1),
(3, 'Eder', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '610395839', 1),
(4, 'Markel', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '693043294', 1),
(5, 'Eider', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '620394829', 1),
(6, 'Maite', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '698394053', 1),
(7, 'Ander', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '667859405', 1),
(8, 'Maitane', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '684930495', 1),
(9, 'Mikel', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'guardian', '619203923', 1),
(10, 'Sara', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'guardian', '657463827', 1),
(11, 'Ibai', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'buscador', '609839481', 1),
(12, 'Ane', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'buscador', '668490392', 1),
(13, 'Oihane', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '693029491', 2),
(14, 'Nerea', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '666392834', 2),
(15, 'Jon', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '672839438', 2),
(16, 'Iñaki', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '637483942', 2),
(17, 'Olatz', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '658493059', 2),
(18, 'Irene', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '689504943', 2),
(19, 'Kimetz', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '695847336', 2),
(20, 'Kenar', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '605949380', 2),
(21, 'Irati', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'guardian', '643454322', 2),
(22, 'Iratxe', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'guardian', '685948574', 2),
(23, 'Julen', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'buscador', '695847586', 2),
(24, 'Asier', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'buscador', '648395057', 2),
(25, 'Paula', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '698495839', 3),
(26, 'Yaiza', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '629394830', 3),
(27, 'Jorge', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '694203948', 3),
(28, 'Andrea', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '639485744', 3),
(29, 'Adrian', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'cazador', '684953940', 3),
(30, 'Carlos', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '645865839', 3),
(31, 'Maider', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '666059403', 3),
(32, 'Gotzon', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'golpeador', '602345789', 3),
(33, 'Jaime', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'guardian', '698484934', 3),
(34, 'Ainara', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'guardian', '648593958', 3),
(35, 'Maialen', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'buscador', '684736274', 3),
(36, 'Iñigo', 'https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png', 'buscador', '612467092', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasena` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `usuario`, `contrasena`, `nombre`, `correo`, `tipo`) VALUES
(1, 'iker', '1234', 'Iker', 'iker@gmail.com', 0),
(2, 'markel', '1234', 'Markel', 'markel@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`idConsulta`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`idEquipo`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`idJugador`),
  ADD KEY `idEquipo` (`idEquipo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `consulta`
--
ALTER TABLE `consulta`
  MODIFY `idConsulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `idEquipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `jugador`
--
ALTER TABLE `jugador`
  MODIFY `idJugador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `equipo_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`);

--
-- Filtros para la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD CONSTRAINT `jugador_ibfk_1` FOREIGN KEY (`idEquipo`) REFERENCES `equipo` (`idEquipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
