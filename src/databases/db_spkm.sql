-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2022 at 05:05 AM
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
-- Table structure for table `tbl_mahasiswa`
--

CREATE TABLE `tbl_mahasiswa` (
  `nim_mahasiswa` varchar(13) NOT NULL,
  `nama_mahasiswa` varchar(40) NOT NULL,
  `gender_mahasiswa` enum('L','P') NOT NULL,
  `alamat_mahasiswa` varchar(60) NOT NULL,
  `no_telp_mahasiswa` varchar(13) NOT NULL,
  `kelas_mahasiswa` varchar(10) NOT NULL,
  `semester_mahasiswa` int(1) NOT NULL,
  `lvl_akun_mahasiswa` int(1) NOT NULL
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_mahasiswa`
--
ALTER TABLE `tbl_mahasiswa`
  ADD PRIMARY KEY (`nim_mahasiswa`);

--
-- Indexes for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  ADD PRIMARY KEY (`id_permohonan_keanggotaan`),
  ADD KEY `nim_mahasiswa` (`nim_mahasiswa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
