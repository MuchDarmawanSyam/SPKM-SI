-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2022 at 11:20 AM
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
-- Table structure for table `tbl_akun`
--

CREATE TABLE `tbl_akun` (
  `id_akun` int(11) NOT NULL,
  `username_akun` varchar(18) NOT NULL,
  `password_akun` varchar(40) NOT NULL,
  `id_lvl_akun` int(1) NOT NULL,
  `nim_mahasiswa` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_akun`
--

INSERT INTO `tbl_akun` (`id_akun`, `username_akun`, `password_akun`, `id_lvl_akun`, `nim_mahasiswa`) VALUES
(1, 'adminusr123', '449ed97bdef672c3aadc98dcdaa63fe9d357f8f1', 3, 'admin1'),
(2, '2022051074042', 'f261c376a2a0437ab74dcb156d352887d9711110', 1, '2022051074042'),
(3, '2022051074046', '62d8eb9f8f31b9b2e4a3fe179357e12fba6f4ab7', 1, '2022051074046'),
(4, '2022051074050', '6c736c8a538acbc9c28b0e05d0cc845149bf2400', 1, '2022051074050'),
(7, '2022051074051', 'ca8d1bf5030e24de6ad1fc0b376e82e4bc9b635d', 1, '2022051074051'),
(9, '2022051074049', 'e9d69fc187bb55aff0cb99127309c2e780fed39a', 1, '2022051074049'),
(10, '2022051074000', '546216b421e178dc1ad3a825189b861fdc7b7a8c', 1, '2022051074000');

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
  `email_mahasiswa` varchar(50) NOT NULL,
  `alamat_mahasiswa` varchar(60) NOT NULL,
  `no_telp_mahasiswa` varchar(13) NOT NULL,
  `kelas_mahasiswa` varchar(10) NOT NULL,
  `id_semester` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_mahasiswa`
--

INSERT INTO `tbl_mahasiswa` (`nim_mahasiswa`, `nama_mahasiswa`, `gender_mahasiswa`, `email_mahasiswa`, `alamat_mahasiswa`, `no_telp_mahasiswa`, `kelas_mahasiswa`, `id_semester`) VALUES
('2022051074000', 'Pemohon Laki', 'L', 'pemohonLaki@gmail.com', '-', '-', '-', 1),
('2022051074042', 'Iriansyah Syam', 'L', 'iriansyahsyam@gmail.com', 'Jalan. Tasangkapura No. 36', '082197829187', 'B', 1),
('2022051074046', 'Salzadila Syam', 'P', 'salzadilasyam@gmail.com', 'Polimak 1 No. 40', '082197001122', 'B', 1),
('2022051074049', 'Pemohon 2', 'P', 'pemohon2@gmail.com', '', '-', '-', 1),
('2022051074050', 'Mahasiswa 3', 'L', '', '', '', '', 1),
('2022051074051', 'Testing 2', 'L', '', '-', '-', '-', 1),
('admin1', 'Admin1', 'L', '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_permohonan_keanggotaan`
--

CREATE TABLE `tbl_permohonan_keanggotaan` (
  `id_permohonan_keanggotaan` int(11) NOT NULL,
  `nama_permohonan_keanggotaan` varchar(40) NOT NULL,
  `nim_permohonan_keanggotaan` varchar(13) NOT NULL,
  `email_permohonan_keanggotaan` varchar(50) NOT NULL,
  `gender_permohonan_keanggotaan` enum('L','P') NOT NULL,
  `pesan_permohonan_keanggotaan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_permohonan_keanggotaan`
--

INSERT INTO `tbl_permohonan_keanggotaan` (`id_permohonan_keanggotaan`, `nama_permohonan_keanggotaan`, `nim_permohonan_keanggotaan`, `email_permohonan_keanggotaan`, `gender_permohonan_keanggotaan`, `pesan_permohonan_keanggotaan`) VALUES
(1, 'Much Darmawan Iriansyah Syam', '2022051074044', 'mchdarmawan@gmail.com', 'L', 'Tolong terima saya sebagai anggota mahasiswa SI'),
(2, 'Putri Salsadila Syam', '202205107400', 'putrisyam@gmail.com', 'P', 'Tolong terima saya sebagai anggota mahasiswa SI'),
(6, 'Pemohon Perempuan', '202205107401', 'pemohonPerempuan@gmail.com', 'P', 'Test Pesan Peromohonan'),
(7, 'Pemohon Laki2', '2022051074002', 'pemohonLaki2@gmail.com', 'L', 'Test Pesan'),
(8, 'Pemohon Perempuan3', '202205107403', 'pemohonPerempuan3@gmail.com', 'P', 'Test Pesan Peromohonan');

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
-- Indexes for table `tbl_akun`
--
ALTER TABLE `tbl_akun`
  ADD PRIMARY KEY (`id_akun`),
  ADD KEY `id_lvl_akun` (`id_lvl_akun`),
  ADD KEY `nim_mahasiswa` (`nim_mahasiswa`);

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
  ADD KEY `id_semester` (`id_semester`);

--
-- Indexes for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  ADD PRIMARY KEY (`id_permohonan_keanggotaan`);

--
-- Indexes for table `tbl_semester`
--
ALTER TABLE `tbl_semester`
  ADD PRIMARY KEY (`id_semester`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_akun`
--
ALTER TABLE `tbl_akun`
  MODIFY `id_akun` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_lvl_akun`
--
ALTER TABLE `tbl_lvl_akun`
  MODIFY `id_lvl_akun` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_permohonan_keanggotaan`
--
ALTER TABLE `tbl_permohonan_keanggotaan`
  MODIFY `id_permohonan_keanggotaan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_semester`
--
ALTER TABLE `tbl_semester`
  MODIFY `id_semester` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_akun`
--
ALTER TABLE `tbl_akun`
  ADD CONSTRAINT `tbl_akun_ibfk_1` FOREIGN KEY (`id_lvl_akun`) REFERENCES `tbl_lvl_akun` (`id_lvl_akun`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_akun_ibfk_2` FOREIGN KEY (`nim_mahasiswa`) REFERENCES `tbl_mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_mahasiswa`
--
ALTER TABLE `tbl_mahasiswa`
  ADD CONSTRAINT `tbl_mahasiswa_ibfk_2` FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id_semester`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
