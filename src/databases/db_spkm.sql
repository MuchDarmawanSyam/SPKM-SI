-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2022 at 05:45 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_spkm`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_lvl_akun`
--

CREATE TABLE `tbl_lvl_akun` (
  `id_lvl_akun` int(1) NOT NULL,
  `ket_lvl_akun` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_lvl_akun`
--

INSERT INTO `tbl_lvl_akun` (`id_lvl_akun`, `ket_lvl_akun`) VALUES
(1, 'Mahasiswa'),
(2, 'Pengurus'),
(3, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mahasiswa`
--

CREATE TABLE `tbl_mahasiswa` (
  `nim_mahasiswa` varchar(13) NOT NULL,
  `nama_mahasiswa` varchar(40) NOT NULL,
  `gender_mahasiswa` enum('L','P') NOT NULL,
  `alamat_mahasiswa` varchar(60) NOT NULL,
  `no_telp_mahasiswa` varchar(13) NOT NULL,
  `kelas_mahasiswa` varchar(10) NOT NULL,
  `id_semester` int(1) NOT NULL,
  `id_lvl_akun` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_permohonan_keanggotaan`
--

CREATE TABLE `tbl_permohonan_keanggotaan` (
  `id_permohonan_keanggotaan` int(11) NOT NULL,
  `nama_permohonan_keanggotaan` varchar(40) NOT NULL,
  `nim_mahasiswa` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_semester`
--

CREATE TABLE `tbl_semester` (
  `id_semester` int(1) NOT NULL,
  `ket_semester` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_semester`
--

INSERT INTO `tbl_semester` (`id_semester`, `ket_semester`) VALUES
(1, 'satu'),
(2, 'dua'),
(3, 'tiga'),
(4, 'empat'),
(5, 'lima'),
(6, 'enam'),
(7, 'tujuh'),
(8, 'delapan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_lvl_akun`
--
ALTER TABLE `tbl_lvl_akun`
  ADD PRIMARY KEY (`id_lvl_akun`);

--
-- Indexes for table `tbl_mahasiswa`
--
ALTER TABLE `tbl_mahasiswa`
  ADD PRIMARY KEY (`nim_mahasiswa`),
  ADD KEY `id_semester` (`id_semester`),
  ADD KEY `id_lvl_akun` (`id_lvl_akun`);

--
-- Indexes for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  ADD PRIMARY KEY (`id_permohonan_keanggotaan`),
  ADD KEY `nim_mahasiswa` (`nim_mahasiswa`);

--
-- Indexes for table `tbl_semester`
--
ALTER TABLE `tbl_semester`
  ADD PRIMARY KEY (`id_semester`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_lvl_akun`
--
ALTER TABLE `tbl_lvl_akun`
  MODIFY `id_lvl_akun` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_semester`
--
ALTER TABLE `tbl_semester`
  MODIFY `id_semester` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  ADD CONSTRAINT `tbl_permohonan_keanggotaan_ibfk_1` FOREIGN KEY (`nim_mahasiswa`) REFERENCES `tbl_mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
