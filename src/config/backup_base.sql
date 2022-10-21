-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2022 at 01:57 PM
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
-- Table structure for table `tbl_permohonan_keanggotaan`
--

CREATE TABLE `tbl_permohonan_keanggotaan` (
  `id_permohonan_keanggotaan` int(11) NOT NULL,
  `nama_permohonan_keanggotaan` varchar(40) NOT NULL,
  `nim_permohonan_keanggotaan` varchar(13) NOT NULL,
  `gender_permohonan_keanggotaan` enum('L','P') NOT NULL,
  `pesan_permohonan_keanggotaan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_permohonan_keanggotaan`
--

INSERT INTO `tbl_permohonan_keanggotaan` (`id_permohonan_keanggotaan`, `nama_permohonan_keanggotaan`, `nim_permohonan_keanggotaan`, `gender_permohonan_keanggotaan`, `pesan_permohonan_keanggotaan`) VALUES
(1, 'Much Darmawan Iriansyah Syam', '2022051074044', 'L', 'Tolong terima saya sebagai anggota mahasiswa SI'),
(2, 'Putri Salsadila Syam', '202205107400', 'P', 'Tolong terima saya sebagai anggota mahasiswa SI'),
(3, 'Pemohon 1', '2022051074047', 'L', ' Saya selaku mahasiswa prodi Sistem Informasi ingin mengajukan permohonan keanggotaan mahasiswa Unce');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  ADD PRIMARY KEY (`id_permohonan_keanggotaan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  MODIFY `id_permohonan_keanggotaan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
