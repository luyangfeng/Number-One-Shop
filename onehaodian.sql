-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-13 09:18:25
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onehaodian`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(5) NOT NULL COMMENT 'id',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `url` varchar(255) NOT NULL COMMENT '图片路径',
  `price` float NOT NULL COMMENT '价格',
  `num` int(10) NOT NULL COMMENT '库存',
  `urls` varchar(999) NOT NULL COMMENT '图片'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `url`, `price`, `num`, `urls`) VALUES
(1, '背包 男士休闲usb帆布书包学生双肩包男创意笔记本电脑包', 'https://img10.360buyimg.com/n1/s360x360_jfs/t1/33762/6/9195/146998/5cc933a3Eef96dca5/834a58aac13a9c96.jpg', 59.88, 30, 'https://img14.360buyimg.com/n1/s50x50_jfs/t1/42974/21/2171/110480/5cc933a3E2d103c05/e33ff22e0b35f0f0.jpg,https://img14.360buyimg.com/n1/s50x50_jfs/t1/38371/32/4480/180461/5cc933a3E463087d4/cd1a2d3e02fdf8c9.jpg,https://img14.360buyimg.com/n1/s50x50_jfs/t1/33008/38/9336/198471/5cc933a3Ecd09ebaf/b6f15be6c69c1c9d.jpg,https://img14.360buyimg.com/n1/s50x50_jfs/t1/43232/39/2170/265285/5cc933a3Eb00c4bca/550f88d71cb94b06.jpg,https://img14.360buyimg.com/n1/s50x50_jfs/t1/33762/6/9195/146998/5cc933a3Eef96dca5/834a58aac13a9c96.jpg,https://img14.360buyimg.com/n1/s50x50_jfs/t1/42974/21/2171/110480/5cc933a3E2d103c05/e33ff22e0b35f0f0.jpg,https://img14.360buyimg.com/n1/s50x50_jfs/t1/33993/23/9159/187075/5cc933a3E4814333c/76150f303a16d860.jpg'),
(2, 'TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器', 'https://img11.360buyimg.com/n1/s360x360_jfs/t1/49379/4/94/144949/5cd241b5Ee2262304/d59bd88f0d960c5d.jpg', 109, 27, ''),
(3, '德国进口牛奶 德亚（Weidendorf）全脂纯牛奶 早餐奶 200ml*30盒 整箱装（新老包装随机发货）', 'https://img14.360buyimg.com/n1/s360x360_jfs/t23464/85/841467916/273987/4a02a3ad/5b44150eN15f67ca3.jpg', 56, 70, ''),
(4, 'TP-LINK TL-WN726N免驱版 USB无线网卡 笔记本台式机通用随身wifi接收器 外置天线 智能安装', 'https://img10.360buyimg.com/n1/s360x360_jfs/t2146/90/2096274276/2879845/42b3fb3a/56f0a805N7bad2871.jpg', 56.9, 27, ''),
(5, '新生儿衣服0-3个月6春秋夏季宝宝秋衣初生婴儿和尚服内衣纯棉套装 粉色 52cm', 'https://img10.360buyimg.com/n1/s360x360_jfs/t1/71166/3/2661/113729/5d0f24c1Eb3e73f7d/b76fe1987ddae559.jpg', 59, 34, ''),
(6, '免打孔挂拖把架拖把夹无痕贴 颜色随机1个装', 'https://img12.360buyimg.com/n1/s360x360_jfs/t21979/36/2269270543/52967/1c4b9e1c/5b4ee547N1d158eda.jpg', 15, 30, ''),
(7, '印尼进口 Tango威化饼干 休闲零食 咔咔脆威化饼干 巧克力味160g/盒', 'https://img11.360buyimg.com/n1/s360x360_jfs/t21871/219/2471606850/476457/63e63438/5b5804b3Nb7638cf7.jpg', 19, 34, ''),
(8, '尚美德 厨房置物架 壁挂免打孔厨具收纳刀架调料架筷子筒 微波炉架 厨房用品 亮银款-60CM（双杯8勾）', 'https://img14.360buyimg.com/n1/s360x360_jfs/t1/43895/40/6989/223885/5d09b0bdE1afa3cc3/fd638b5a382a1906.jpg', 50, 29, ''),
(9, '得力(deli) 50只A4牛皮纸档案袋 175g侧宽4cm 标书合同文件资料袋 33474', 'https://img13.360buyimg.com/n1/s360x360_jfs/t19717/251/228992018/489284/51367082/5a654c11N277019ad.jpg', 35, 90, ''),
(10, '英国进口 麦维他（Mcvitie\'s）原味全麦粗粮酥性消化饼干 400g 早餐下午茶零食', 'https://img12.360buyimg.com/n1/s360x360_jfs/t27121/34/2295807440/500381/a4e235ea/5bfe0e18Nd6775cfb.jpg', 22, 45, ''),
(11, '三只松鼠手剥东北开口松子 坚果炒货零食特产每日坚果100g/袋', 'https://img13.360buyimg.com/n1/s360x360_jfs/t1/46295/19/4522/178682/5d230224Ef29c96c7/4cd787a7993ed675.jpg', 38.8, 70, ''),
(12, '珀莱雅活能密集补水保湿套装化妆品套装礼盒女士护肤品洁面水乳BB霜喷雾正品 洁面+水乳+BB+喷雾', 'https://img10.360buyimg.com/n1/s360x360_jfs/t1/48854/40/4456/86228/5d23fae9E7589cfc6/b093d6eea714127e.jpg', 199, 27, ''),
(13, '沟门前【官方旗舰店】碗团 山西特产 吕梁 碗托 150g*10 免邮 柳林小吃 荞面 碗秃 方便食品 香辣', 'https://img11.360buyimg.com/n1/s360x360_jfs/t23767/87/2528966334/224341/f13b98a6/5b840515N63965dce.png', 29, 45, ''),
(14, '飞健 跑步机 家用静音智能折叠健身器材 2018新款 F2免安装跑步机+智能体重秤', 'https://img13.360buyimg.com/n1/s360x360_jfs/t1/63941/9/3883/164218/5d2092fbE9ae1aa5e/944d477455d4573d.jpg', 1350, 70, ''),
(15, '卡西欧(CASIO)手表 男士运动防水石英腕表 黑盘钢带数字表圈男表', 'https://img12.360buyimg.com/n1/s360x360_jfs/t1/71305/2/2993/235114/5d1332e9E8242e4cc/173125ef85e03f27.jpg', 258, 27, ''),
(16, '优能高效学习法 中学生提升学习效率的32个技巧', 'https://img13.360buyimg.com/n1/s360x360_jfs/t1/32886/23/11353/134060/5cb46cfbEe0ee8ab4/307d20996506651d.jpg', 20, 70, ''),
(17, '兰酷帕 电子秤称重人体秤精准电子称健康秤减肥成人家用计体重秤 LED黑色款电子秤', 'https://img14.360buyimg.com/n1/s360x360_jfs/t1/33404/33/12904/118712/5cf6571aE57513cfb/8d6adabcf2ebc3cd.jpg', 40, 19, ''),
(18, '厨房置物架家用落地省空间用品用具小百货收纳微波炉移动储物架子 三层70', 'https://img11.360buyimg.com/n1/s360x360_jfs/t1/25126/20/9478/173440/5c7f3bc7E784766c8/2bd85222aeb75c81.jpg', 279, 10, ''),
(19, '法国正品红酒包邮 商务红酒 法国原瓶原装进口红酒 2016年波尔多AOC干红葡萄酒 红酒礼盒包装 进口红酒单支750ml*1支（收藏商品 优先发货）', 'https://img11.360buyimg.com/n1/s360x360_jfs/t1/77522/22/3750/112247/5d1f1d30Efaea0cea/d47f5f5153606b28.jpg', 228, 27, ''),
(20, '造物生活 厨房锅盖架放菜板锅盖的架子刀架收纳置物架砧板架菜板架家居用品 两个装【颜色随机】', 'https://img14.360buyimg.com/n1/s360x360_jfs/t1/37455/40/12847/167076/5d1712eeE4523f31b/a7b29d6525fe8840.jpg', 70, 18, ''),
(21, '七匹狼钱包 横款两折钱夹皮夹多功能票夹短款零钱夹男 3A1310185黑色', 'https://img12.360buyimg.com/n1/s360x360_jfs/t1/35027/36/12044/271537/5d00d3c7Eead573ec/20d182e9e0be60c1.jpg', 99, 19, ''),
(22, 'Bright&Delicate凉鞋 男2019夏季新款头层牛皮沙滩鞋男士休闲凉拖鞋真皮拖鞋凉鞋男 棕色 41', 'https://img11.360buyimg.com/n1/s360x360_jfs/t1/31550/9/3582/241813/5c761fc5E4f6842bc/73b4fa6ce846f463.jpg', 35, 35, ''),
(23, 'TP-LINK TL-WN725N免驱版 迷你USB无线网卡mini 笔记本台式机通用随身wifi接收器 智能安装', 'https://img13.360buyimg.com/n1/s360x360_jfs/t1/29346/21/7660/158662/5c6f67b8E7aa65c1c/edcc9b9e42ed9c35.jpg', 59, 30, ''),
(24, '包大人 Dr.P 轻薄瞬吸 XL加大号护理垫600*900mm 10片 老人婴儿尿垫产妇垫', 'https://img12.360buyimg.com/n1/s360x360_jfs/t23113/199/2104532273/170025/7e68488a/5b73fc79Na3decd36.jpg', 38.8, 18, ''),
(25, '诚悦电镀哑铃杠铃30kg(15kg*2)男女士运动健身训练器材家用组合套装升级款赠护手+护腕+30厘米连接器CY-160', 'https://img10.360buyimg.com/n1/s360x360_jfs/t1/37540/13/506/227268/5cb0098cE1bd06bfe/d0be5af98a3b92e1.jpg', 329, 56, ''),
(26, '精进：如何成为一个很厉害的人', 'https://img11.360buyimg.com/n1/s360x360_jfs/t2848/121/326022184/203844/41165897/570e58a2N0e31cce3.jpg', 35, 46, ''),
(27, '月亮与六便士（未删减足本，毛姆经典著作，毛姆故居典藏版本，豆瓣高分推荐！）', 'https://img12.360buyimg.com/n1/s360x360_jfs/t21448/226/687418185/335563/d82c0165/5b160656Nc8216ad1.jpg', 19, 28, ''),
(28, '加加林 一次性鞋套家用 室内加厚加大无纺布鞋套 防尘耐磨防滑脚套 均码通用 蓝色100只装', 'https://img11.360buyimg.com/n1/s360x360_jfs/t1/20647/7/14141/422847/5ca45572Ebb18d2df/e51ba76649ce06c5.jpg', 49, 27, ''),
(29, '兰雀（Lacheer） 波兰原装进口 唯鲜系列 全脂高钙纯牛奶 早餐奶 1L*12盒整箱装', 'https://img10.360buyimg.com/n1/s360x360_jfs/t1/25830/1/12723/90840/5c99e2d8E269d2ba0/7052361d2606c7ea.jpg', 59, 10, ''),
(30, '【京东装配一体】Keep 跑步机K1智能家用健身器材 52cm宽大跑带 定制课程减震静 跑步机（现货发售）', 'https://img13.360buyimg.com/n1/s360x360_jfs/t1/42603/22/8704/115277/5d22197dE2a577e9d/a99333bd5e55b81d.jpg', 1999, 27, '');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` tinyint(4) NOT NULL COMMENT 'id',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `phone` varchar(20) NOT NULL COMMENT '密码',
  `password` varchar(25) NOT NULL COMMENT '手机号',
  `date` date NOT NULL COMMENT '时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `password`, `date`) VALUES
(49, '935589976', '13616518203', '123456', '2019-07-11'),
(48, '746968739', '1314520520feng', '13616518203', '2019-07-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=31;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=50;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
