-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 31. Jul 2024 um 15:25
-- Server-Version: 10.4.32-MariaDB
-- PHP-Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `ecommerce`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `generated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `customers`
--

INSERT INTO `customers` (`customer_id`, `first_name`, `last_name`, `email`, `password_hash`, `phone`, `generated_at`) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'hashedpassword1', '123-456-7890', '2024-07-30'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'hashedpassword2', '123-456-7891', '2024-07-29'),
(3, 'Michael', 'Johnson', 'michael.johnson@example.com', 'hashedpassword3', '123-456-7892', '2024-07-28'),
(4, 'Emily', 'Davis', 'emily.davis@example.com', 'hashedpassword4', '123-456-7893', '2024-07-27'),
(5, 'Robert', 'Brown', 'robert.brown@example.com', 'hashedpassword5', '123-456-7894', '2024-07-26'),
(6, 'Mary', 'Wilson', 'mary.wilson@example.com', 'hashedpassword6', '123-456-7895', '2024-07-25'),
(7, 'James', 'Miller', 'james.miller@example.com', 'hashedpassword7', '123-456-7896', '2024-07-24'),
(8, 'Linda', 'Moore', 'linda.moore@example.com', 'hashedpassword8', '123-456-7897', '2024-07-23'),
(9, 'William', 'Taylor', 'william.taylor@example.com', 'hashedpassword9', '123-456-7898', '2024-07-22'),
(10, 'Barbara', 'Anderson', 'barbara.anderson@example.com', 'hashedpassword10', '123-456-7899', '2024-07-21');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `status` enum('processing','shipping','delivering','canceled') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `total`, `status`) VALUES
(1, 1, '2024-07-30', 150.00, 'processing'),
(2, 2, '2024-07-29', 75.50, 'shipping'),
(3, 3, '2024-07-28', 200.00, 'delivering'),
(4, 4, '2024-07-27', 99.99, 'canceled'),
(5, 5, '2024-07-26', 120.00, 'processing'),
(6, 6, '2024-07-25', 250.00, 'shipping'),
(7, 7, '2024-07-24', 300.00, 'delivering'),
(8, 8, '2024-07-23', 45.00, 'canceled'),
(9, 9, '2024-07-22', 60.00, 'processing'),
(10, 10, '2024-07-21', 80.00, 'shipping');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 1, 2, 20.00),
(2, 1, 2, 1, 30.00),
(3, 2, 3, 3, 90.00),
(4, 2, 4, 2, 80.00),
(5, 3, 5, 1, 50.00),
(6, 4, 6, 4, 240.00),
(7, 5, 7, 2, 140.00),
(8, 6, 8, 1, 80.00),
(9, 7, 9, 5, 450.00),
(10, 8, 10, 1, 100.00);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_date` date NOT NULL,
  `status` enum('paid','open','canceled') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `payments`
--

INSERT INTO `payments` (`payment_id`, `order_id`, `amount`, `payment_date`, `status`) VALUES
(1, 1, 150.00, '2024-07-30', 'paid'),
(2, 2, 75.50, '2024-07-29', 'open'),
(3, 3, 200.00, '2024-07-28', 'paid'),
(4, 4, 99.99, '2024-07-27', 'canceled'),
(5, 5, 120.00, '2024-07-26', 'paid'),
(6, 6, 250.00, '2024-07-25', 'open'),
(7, 7, 300.00, '2024-07-24', 'paid'),
(8, 8, 45.00, '2024-07-23', 'canceled'),
(9, 9, 60.00, '2024-07-22', 'paid'),
(10, 10, 80.00, '2024-07-21', 'open');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` varchar(500) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_stock` int(11) NOT NULL,
  `generated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `product_price`, `product_stock`, `generated_at`) VALUES
(1, 'Product 1', 'Description of product 1', 10.00, 100, '2024-07-31'),
(2, 'Product 2', 'Description of product 2', 20.00, 150, '2024-07-31'),
(3, 'Product 3', 'Description of product 3', 30.00, 200, '2024-07-31'),
(4, 'Product 4', 'Description of product 4', 40.00, 250, '2024-07-31'),
(5, 'Product 5', 'Description of product 5', 50.00, 300, '2024-07-31'),
(6, 'Product 6', 'Description of product 6', 60.00, 350, '2024-07-31'),
(7, 'Product 7', 'Description of product 7', 70.00, 400, '2024-07-31'),
(8, 'Product 8', 'Description of product 8', 80.00, 450, '2024-07-31'),
(9, 'Product 9', 'Description of product 9', 90.00, 500, '2024-07-31'),
(10, 'Product 10', 'Description of product 10', 100.00, 550, '2024-07-31');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indizes für die Tabelle `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indizes für die Tabelle `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indizes für die Tabelle `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indizes für die Tabelle `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
