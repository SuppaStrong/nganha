import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  Smartphone,
  Star,
  ArrowRight,
  Send,
  Gamepad2,
  Zap,
  Shield,
  Trophy,
  Search,
  Filter,
  Eye,
  Heart,
  Code,
  Palette,
  GraduationCap,
  Coffee,
  Sparkles
} from 'lucide-react';

// Enhanced Mock Data
const carouselImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Trải Nghiệm Game Đỉnh Cao",
    description: "Kiến tạo những thế giới số hấp dẫn, đột phá giới hạn của giải trí tương tác"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Cách Mạng Game Mobile",
    description: "Những tựa game di động sáng tạo, định nghĩa lại trải nghiệm giải trí trên tay bạn"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Đa Nền Tảng – Một Đam Mê",
    description: "Trải nghiệm chơi game mượt mà, nhất quán trên mọi thiết bị yêu thích của bạn"
  }
];

// Partners data
const partners = [
  {
    id: 1,
    name: "Unity Technologies",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/ironsource.png"
  },
  {
    id: 2,
    name: "Epic Games",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/Mintegral.png"
  },
  {
    id: 3,
    name: "Steam",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/youtube.png"
  },
  {
    id: 4,
    name: "PlayStation",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/Google_AdMob_logo.svg_-2-300x69.png"
  },
  {
    id: 5,
    name: "Nintendo",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/unity.png"
  },
  {
    id: 6,
    name: "Xbox",
    logo: "https://metagames.ltd/wp-content/uploads/2024/11/Payoneer.png"
  }
];

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Trần Văn Đức",
    role: "Chủ tịch HĐQT & Người đại diện",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Nhà sáng lập với hơn 12 năm kinh nghiệm trong ngành giải trí số và phát triển game Việt Nam"
  },
  {
    id: 2,
    name: "Nguyễn Thị Lan",
    role: "Giám đốc Sáng tạo",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Chuyên gia thiết kế game với tầm nhìn đột phá, tác giả của nhiều tựa game đình đám"
  },
  {
    id: 3,
    name: "Phạm Minh Tuấn",
    role: "Trưởng nhóm Kỹ thuật",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Kỹ sư phần mềm chuyên về engine game và kiến trúc đa nền tảng hiệu suất cao"
  },
  {
    id: 4,
    name: "Lê Thị Hương",
    role: "Giám đốc Nghệ thuật",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Tạo ra những trải nghiệm hình ảnh sống động, chinh phục hàng triệu người chơi trên toàn thế giới"
  },
  {
    id: 5,
    name: "Hoàng Đức Anh",
    role: "Nhà thiết kế Game",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Kiến trúc sư gameplay, chuyên tạo ra những cơ chế chơi game cuốn hút và gây nghiện lành mạnh"
  }
];

const games = [
  {
    id: 1,
    title: "Mystic Realms: Origins",
    description: "An immersive fantasy adventure featuring dynamic storytelling and breathtaking environments that adapt to your choices.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android", "Steam"],
    rating: 4.9,
    downloads: "3.2M+",
    category: "RPG",
    featured: true
  },
  {
    id: 2,
    title: "Neon Speed",
    description: "Futuristic racing experience with anti-gravity vehicles and stunning cyberpunk aesthetics in competitive multiplayer.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["PlayStation", "Xbox", "PC"],
    rating: 4.7,
    downloads: "2.1M+",
    category: "Racing",
    featured: true
  },
  {
    id: 3,
    title: "Crystal Quest",
    description: "Strategic puzzle adventure combining gem-matching mechanics with epic quest narratives in magical kingdoms.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android"],
    rating: 4.8,
    downloads: "6.5M+",
    category: "Puzzle",
    featured: true
  },
  {
    id: 4,
    title: "Galactic Warfare",
    description: "Epic space combat simulator with tactical fleet management and intense real-time battles across the galaxy.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["Steam", "Epic Games"],
    rating: 4.6,
    downloads: "1.3M+",
    category: "Action",
    featured: false
  },
  {
    id: 5,
    title: "Empire Builders",
    description: "Master the art of civilization building in this deep strategy game with diplomatic and military campaigns.",
    image: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?q=80&w=1740&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "Mac"],
    rating: 4.5,
    downloads: "1.8M+",
    category: "Strategy",
    featured: false
  },
  {
    id: 6,
    title: "Deep Blue",
    description: "Explore the mysterious ocean depths and discover ancient secrets in this atmospheric underwater adventure.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platforms: ["iOS", "Android"],
    rating: 4.4,
    downloads: "1.1M+",
    category: "Adventure",
    featured: false
  }
];

const jobs = [
  {
    id: 1,
    title: "Lập trình viên Game Senior",
    description: "Kiến trúc trải nghiệm game thế hệ mới với Unity và công nghệ cloud. Yêu cầu kinh nghiệm về kiến trúc multiplayer.",
    location: "Hà Nội / Remote",
    type: "Toàn thời gian",
    department: "Kỹ thuật",
    posted: "3 ngày trước",
    requirements: ["Unity 3D", "C#", "Cloud Gaming"],
    icon: Code
  },
  {
    id: 2,
    title: "Họa sĩ 3D & Hoạt hình",
    description: "Thiết kế tài nguyên hình ảnh ấn tượng và hoạt hình mượt mà cho các tựa game. Yêu cầu thành thạo quy trình 3D hiện đại.",
    location: "Hà Nội",
    type: "Toàn thời gian",
    department: "Nghệ thuật",
    posted: "1 tuần trước",
    requirements: ["Maya", "Blender", "Motion Capture"],
    icon: Palette
  },
  {
    id: 3,
    title: "Nhà thiết kế Game",
    description: "Xây dựng hệ thống gameplay hấp dẫn và chiến lược monetization cho game mobile. Ưu tiên ứng viên có kinh nghiệm phân tích dữ liệu.",
    location: "Remote",
    type: "Hợp đồng",
    department: "Thiết kế",
    posted: "2 ngày trước",
    requirements: ["Game Design", "Monetization", "Data Analysis"],
    icon: Lightbulb
  },
  {
    id: 4,
    title: "Trưởng nhóm QA",
    description: "Dẫn dắt các sáng kiến đảm bảo chất lượng đa nền tảng với framework kiểm thử tự động và quản lý đội nhóm.",
    location: "Hà Nội",
    type: "Toàn thời gian",
    department: "Kiểm thử",
    posted: "4 ngày trước",
    requirements: ["Test Automation", "Cross-Platform", "Team Management"],
    icon: Shield
  },
  {
    id: 5,
    title: "Thiết kế UI/UX",
    description: "Tạo ra giao diện người dùng trực quan và đẹp mắt cho game mobile và console theo hướng lấy người dùng làm trung tâm.",
    location: "Remote",
    type: "Toàn thời gian",
    department: "Thiết kế",
    posted: "1 ngày trước",
    requirements: ["Figma", "Game UI", "User Testing"],
    icon: Eye
  },
  {
    id: 6,
    title: "Quản lý Marketing",
    description: "Dẫn dắt chiến lược marketing toàn diện cho các đợt ra mắt game, bao gồm hợp tác influencer và xây dựng cộng đồng.",
    location: "Hà Nội",
    type: "Toàn thời gian",
    department: "Marketing",
    posted: "5 ngày trước",
    requirements: ["Digital Marketing", "Community Management", "Influencer Relations"],
    icon: Target
  }
];

// Company timeline
const timeline = [
  {
    year: "2013",
    title: "Thành lập Công ty",
    description: "CTCP Giải trí Số Ngân Hà ra đời với sứ mệnh mang lại những trải nghiệm giải trí số đỉnh cao cho người dùng Việt Nam."
  },
  {
    year: "2015",
    title: "Thành công đầu tiên",
    description: "Tựa game mobile đầu tiên của chúng tôi đạt hơn 500.000 lượt tải trong 3 tuần đầu ra mắt."
  },
  {
    year: "2018",
    title: "Mở rộng nền tảng",
    description: "Ra mắt thành công tựa game đa nền tảng đầu tiên, chinh phục cả mobile, PC và trình duyệt web."
  },
  {
    year: "2021",
    title: "Vươn tầm khu vực",
    description: "Mở rộng thị trường ra Đông Nam Á với hơn 5 triệu người chơi từ nhiều quốc gia."
  },
  {
    year: "2025",
    title: "Đổi mới thế hệ mới",
    description: "Tiên phong ứng dụng AI và công nghệ thực tế tăng cường vào trải nghiệm game Việt Nam."
  }
];

// Reusable Components
const ContactDialog = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-violet-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 p-6 rounded-t-3xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Ứng tuyển: {job?.title}</h2>
            <p className="text-violet-100">Liên hệ với chúng tôi để ứng tuyển vị trí này</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-violet-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Địa chỉ</p>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      Thôn Yên Trừ, Xã Yên Bình<br />
                      Huyện Vĩnh Tường, Tỉnh Vĩnh Phúc<br />
                      Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Email</p>
                    <p className="text-gray-300 mt-1">contact@nganha.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Điện thoại</p>
                    <p className="text-gray-300 mt-1">+84 983 805 469</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-violet-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Theo dõi chúng tôi</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Linkedin, name: "LinkedIn", color: "from-violet-600 to-violet-700" },
                  { icon: Facebook, name: "Facebook", color: "from-indigo-600 to-indigo-700" },
                  { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600" },
                  { icon: Instagram, name: "Instagram", color: "from-fuchsia-600 to-pink-600" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`bg-gradient-to-r ${social.color} hover:scale-105 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-semibold">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Application Note */}
            <div className="bg-violet-600/10 p-6 rounded-2xl border border-violet-500/30">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Cách ứng tuyển vị trí này:</strong><br />
                Vui lòng gửi CV và thư xin việc đến <span className="text-violet-400 font-semibold">contact@nganha.org</span> với tiêu đề "Ứng tuyển: {job?.title}". Chúng tôi rất mong nhận được hồ sơ của bạn!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-violet-500/20">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-violet-500/25"
          >
            <span>Đóng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'games', label: 'Games' },
    { id: 'jobs', label: 'Tuyển dụng' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-md z-50 border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ngân Hà Entertainment
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block font-medium">nganha.org</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === item.id
                    ? 'text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-violet-700/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-violet-700/30 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-violet-500/20 rounded-b-2xl">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-violet-600 to-fuchsia-500'
                      : 'text-gray-300 hover:text-white hover:bg-violet-700/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl shadow-violet-900/25">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-900/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-fuchsia-200 bg-clip-text text-transparent">
              {image.title}
            </h3>
            <p className="text-lg md:text-xl text-violet-100 max-w-2xl">{image.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-violet-600/30 hover:bg-violet-600/50 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-violet-600/30 hover:bg-violet-600/50 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TeamCarousel = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % members.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {members.map((member) => (
            <div key={member.id} className="w-1/3 flex-shrink-0 px-4">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-violet-300 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-violet-600/30 hover:bg-violet-600/50 backdrop-blur-md text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-violet-600/30 hover:bg-violet-600/50 backdrop-blur-md text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const GameCard = ({ game }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-violet-500/25 transition-all duration-500 transform hover:-translate-y-3 border border-violet-500/20 group">
    <div className="relative overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-2 rounded-xl flex items-center space-x-2 shadow-lg">
        <Star className="h-4 w-4 text-white fill-current" />
        <span className="text-sm font-bold text-white">{game.rating}</span>
      </div>
      {game.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-2 rounded-xl">
          <span className="text-sm font-bold text-white">Nổi bật</span>
        </div>
      )}
    </div>
    
    <div className="p-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold text-white">{game.title}</h3>
        <span className="text-xs font-semibold text-violet-300 bg-violet-600/20 px-2 py-1 rounded-lg">
          {game.category}
        </span>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{game.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {game.platforms.map((platform, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-violet-600/20 to-fuchsia-500/20 text-violet-300 rounded-xl text-sm font-semibold border border-violet-500/30"
          >
            {platform}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400 font-medium">{game.downloads} lượt tải</span>
      </div>
      
      <div className="flex space-x-3">
        <a
          href="https://play.google.com/store/apps/developer?id=NGAN+HA+ENTERTAINMENT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-violet-500/25 hover:scale-105">
            <Download className="h-4 w-4" />
            <span>Tải về</span>
          </button>
        </a>

        <button className="px-4 py-3 border border-violet-500/50 hover:border-fuchsia-400 text-violet-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-violet-600/20">
          <Eye className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const JobCard = ({ job, onApplyClick }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 hover:shadow-violet-500/25 transition-all duration-500 border border-violet-500/20 hover:border-violet-400/40 group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-2xl">
          <job.icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{job.posted}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-3">
        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
          {job.type}
        </span>
        <span className="bg-violet-600/20 text-violet-300 px-4 py-2 rounded-xl text-sm font-semibold border border-violet-500/30">
          {job.department}
        </span>
      </div>
    </div>
    
    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
    
    <div className="mb-6">
      <h4 className="text-white font-semibold mb-3">Yêu cầu:</h4>
      <div className="flex flex-wrap gap-2">
        {job.requirements.map((req, index) => (
          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-lg">
            {req}
          </span>
        ))}
      </div>
    </div>
    
    <button 
      onClick={() => onApplyClick(job)}
      className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-violet-500/25 hover:scale-105"
    >
      <span>Ứng tuyển ngay</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  </div>
);

// Page Components
const HomePage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            Kiến Tạo
            <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> Thế Giới Số </span>
            Ngân Hà
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            CTCP Giải trí Số Ngân Hà tiên phong phát triển game, tạo ra những trải nghiệm
            số hấp dẫn chinh phục hàng triệu người chơi và định hình lại nền giải trí tương tác Việt Nam.
          </p>
        </div>
        
        <ImageCarousel images={carouselImages} />
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-y border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20+", label: "Game đã ra mắt", icon: Trophy },
            { number: "5M+", label: "Người chơi", icon: Users },
            { number: "30+", label: "Thành viên", icon: Target },
            { number: "12+", label: "Năm kinh nghiệm", icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 text-violet-400 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Games */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Game Nổi Bật</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Khám phá những tựa game được yêu thích nhất của chúng tôi</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.filter(game => game.featured).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/25 hover:scale-105">
            Xem tất cả Game
          </button>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-20 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-y border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Đối Tác của Chúng Tôi</h2>
          <p className="text-xl text-gray-300">Hợp tác với các tên tuổi lớn trong ngành để mang đến trải nghiệm vượt trội</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="group">
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-6 rounded-3xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="py-20 bg-gradient-to-r bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center from-violet-900 to-fuchsia-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Về Ngân Hà Entertainment</h1>
        <p className="text-xl text-violet-100 max-w-4xl mx-auto leading-relaxed">
          Cách mạng hóa ngành giải trí số Việt Nam qua sáng tạo, nghệ thuật và công nghệ tiên tiến
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Sứ Mệnh của Chúng Tôi</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Cách mạng hóa nền giải trí tương tác bằng cách tạo ra những trải nghiệm game đột phá,
              truyền cảm hứng sáng tạo, kết nối cộng đồng người chơi Việt Nam và vươn tầm khu vực.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Từ năm 2013, chúng tôi không ngừng phát triển những tựa game chất lượng cao, không chỉ
              giải trí mà còn tạo nên những kết nối ý nghĩa giữa người chơi, đặt ra tiêu chuẩn mới
              cho ngành game Việt Nam.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Tầm nhìn", desc: "Đổi mới game thế hệ tiếp theo" },
              { icon: Users, title: "Đội ngũ", desc: "30+ chuyên gia sáng tạo" },
              { icon: Award, title: "Chất lượng", desc: "Tiêu chuẩn dẫn đầu ngành" },
              { icon: Globe, title: "Vươn xa", desc: "Người chơi tại 10+ quốc gia" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105">
                <item.icon className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Company Timeline */}
    <section className="py-20 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-y border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Hành Trình Của Chúng Tôi</h2>
          <p className="text-xl text-gray-300">Những cột mốc đáng nhớ trong hành trình đổi mới và phát triển</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-600 to-fuchsia-500"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                    <div className="text-2xl font-bold text-violet-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full relative z-10 mx-auto"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Meet Our Team */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Đội Ngũ của Chúng Tôi</h2>
          <p className="text-xl text-gray-300">Những tài năng tiên phong dẫn dắt thành công của Ngân Hà</p>
        </div>
        
        <TeamCarousel members={teamMembers} />
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-y border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Giá Trị Cốt Lõi</h2>
          <p className="text-xl text-gray-300">Nền tảng của mọi thứ chúng tôi tạo ra</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Sáng tạo",
              description: "Chúng tôi không ngừng khám phá công nghệ tiên tiến và hướng tiếp cận sáng tạo để mang lại trải nghiệm game cách mạng."
            },
            {
              icon: Users,
              title: "Cộng đồng",
              description: "Chúng tôi xây dựng môi trường hòa nhập nơi các tài năng đa dạng hợp tác tạo ra những giải trí số xuất sắc."
            },
            {
              icon: Award,
              title: "Chất lượng",
              description: "Chúng tôi duy trì tiêu chuẩn chất lượng không thỏa hiệp trong mọi khía cạnh phát triển game, từ ý tưởng đến ra mắt."
            }
          ].map((value, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl text-center border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105">
              <value.icon className="h-16 w-16 text-violet-400 mx-auto mb-8" />
              <h3 className="text-2xl font-bold text-white mb-6">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Company Address */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-violet-500/20">
          <div className="flex items-center space-x-6 mb-8">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-4 rounded-2xl">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Trụ sở Chính</h3>
              <p className="text-gray-300">Ghé thăm chúng tôi tại Vĩnh Phúc, Việt Nam</p>
            </div>
          </div>
          
          <div className="text-lg text-gray-300 space-y-2">
            <p className="font-semibold text-white">CTCP Giải trí Số Ngân Hà</p>
            <p>Thôn Yên Trừ, Xã Yên Bình</p>
            <p>Huyện Vĩnh Tường, Tỉnh Vĩnh Phúc</p>
            <p>Việt Nam</p>
            <p className="text-sm text-violet-400 pt-2">MST: 0106200859</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  
  const categories = ['Tất cả', 'RPG', 'Racing', 'Puzzle', 'Action', 'Strategy', 'Adventure'];
  
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center from-violet-900 to-fuchsia-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Bộ Sưu Tập Game</h1>
          <p className="text-xl text-violet-100 max-w-4xl mx-auto leading-relaxed">
            Khám phá danh mục game đa dạng của chúng tôi trên nhiều nền tảng và thể loại khác nhau
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm game..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-violet-700/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          
          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-2">Không tìm thấy game</h3>
              <p className="text-gray-300">Hãy thử điều chỉnh từ khóa hoặc bộ lọc của bạn</p>
            </div>
          )}
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-20 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-y border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Phủ Sóng Nền Tảng</h2>
            <p className="text-xl text-gray-300">Game của chúng tôi tiếp cận người chơi trên mọi nền tảng lớn</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, platform: "Mobile", count: "12 Game" },
              { icon: Play, platform: "PC/Steam", count: "5 Game" },
              { icon: Gamepad2, platform: "Console", count: "3 Game" },
              { icon: Globe, platform: "Web", count: "4 Game" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105">
                <item.icon className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2 text-lg">{item.platform}</h3>
                <p className="text-gray-300">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('Tất cả');
  const [selectedType, setSelectedType] = useState('Tất cả');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const departments = ['Tất cả', 'Kỹ thuật', 'Nghệ thuật', 'Thiết kế', 'Kiểm thử', 'Marketing'];
  const types = ['Tất cả', 'Toàn thời gian', 'Hợp đồng', 'Bán thời gian'];
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'Tất cả' || job.department === selectedDepartment;
    const matchesType = selectedType === 'Tất cả' || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-fuchsia-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Gia Nhập Đội Ngũ</h1>
          <p className="text-xl text-violet-100 max-w-4xl mx-auto leading-relaxed">
            Cùng chúng tôi định hình tương lai game Việt Nam. Chúng tôi đang tìm kiếm những
            tài năng đam mê chia sẻ tầm nhìn tạo ra trải nghiệm số phi thường.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm vị trí..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-gray-800 border border-violet-500/30 rounded-xl text-white px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-gray-800 border border-violet-500/30 rounded-xl text-white px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                {types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white mb-2">Không tìm thấy vị trí nào</h3>
              <p className="text-gray-300">Hãy thử điều chỉnh từ khóa hoặc bộ lọc của bạn</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
        job={selectedJob}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border-y border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Tại sao chọn Ngân Hà?</h2>
            <p className="text-xl text-gray-300">Phúc lợi vượt trội và văn hóa làm việc truyền cảm hứng</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Thu nhập cạnh tranh",
                description: "Mức lương hấp dẫn, thưởng hiệu suất và cổ phần công ty dành cho nhân tài xuất sắc"
              },
              {
                icon: Shield,
                title: "Cân bằng cuộc sống",
                description: "Linh hoạt làm việc từ xa và chính sách nghỉ phép toàn diện, thân thiện"
              },
              {
                icon: GraduationCap,
                title: "Phát triển bản thân",
                description: "Học tập liên tục, tham gia hội thảo quốc tế và nâng cao kỹ năng chuyên môn"
              },
              {
                icon: Heart,
                title: "Sức khỏe toàn diện",
                description: "Bảo hiểm sức khỏe cao cấp, hỗ trợ sức khỏe tâm thần và chương trình thể chất"
              },
              {
                icon: Trophy,
                title: "Văn hóa sáng tạo",
                description: "Tự do thử nghiệm công nghệ mới và hiện thực hóa những ý tưởng độc đáo"
              },
              {
                icon: Coffee,
                title: "Môi trường năng động",
                description: "Văn hóa cộng tác, sự kiện gắn kết đội nhóm và tôn vinh thành tích cùng nhau"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105">
                <benefit.icon className="h-12 w-12 text-violet-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-fuchsia-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-xl text-violet-100 max-w-4xl mx-auto leading-relaxed">
            Có ý tưởng hay, đề xuất hợp tác, hoặc chỉ đơn giản muốn kết nối? Chúng tôi rất vui được lắng nghe bạn.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-violet-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Gửi tin nhắn cho chúng tôi</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Họ và tên</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700 border border-violet-500/30 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Nhập họ và tên của bạn"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700 border border-violet-500/30 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Nội dung</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-6 py-4 bg-gray-700 border border-violet-500/30 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Hãy kể cho chúng tôi nghe về dự án hoặc yêu cầu của bạn..."
                    required
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-violet-500/25 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span>Gửi tin nhắn</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-violet-500/20">
                <h3 className="text-2xl font-bold text-white mb-8">Thông tin liên hệ</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Địa chỉ</p>
                      <p className="text-gray-300 mt-2 leading-relaxed">
                        Thôn Yên Trừ, Xã Yên Bình<br />
                        Huyện Vĩnh Tường, Tỉnh Vĩnh Phúc<br />
                        Việt Nam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Email</p>
                      <p className="text-gray-300 mt-1">contact@nganha.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Điện thoại</p>
                      <p className="text-gray-300 mt-1">+84 983 805 469</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-violet-500/20">
                <h3 className="text-2xl font-bold text-white mb-8">Theo dõi chúng tôi</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, name: "LinkedIn", color: "from-violet-600 to-violet-700" },
                    { icon: Facebook, name: "Facebook", color: "from-indigo-600 to-indigo-700" },
                    { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600" },
                    { icon: Instagram, name: "Instagram", color: "from-fuchsia-600 to-pink-600" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`bg-gradient-to-r ${social.color} hover:scale-105 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-semibold">{social.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-violet-500/20">
                <div className="p-6 border-b border-violet-500/20">
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-violet-400" />
                    <span>Vị trí của chúng tôi</span>
                  </h3>
                </div>
                <div className="h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8!2d105.6!3d21.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE4JzAwLjAiTiAxMDXCsDM2JzAwLjAiRQ!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'hue-rotate(200deg) saturate(0.7) brightness(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CTCP Giải trí Số Ngân Hà - Vĩnh Phúc"
                    className="rounded-b-3xl"
                  ></iframe>
                  {/* Overlay for better theming */}
                  <div className="absolute inset-0 bg-violet-900/20 pointer-events-none rounded-b-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const SleekCharmWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'games':
        return <GamesPage />;
      case 'jobs':
        return <JobsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-violet-950/30 to-gray-950 text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-gray-950 to-gray-950 pointer-events-none"></div>
        <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] pointer-events-none"></div>
        
        <div className="relative z-10">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-950 to-black text-white py-16 border-t border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Ngân Hà Entertainment</h3>
                  <p className="text-gray-400 text-sm font-medium">nganha.org</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Kiến tạo những thế giới game phi thường, truyền cảm hứng và giải trí cho người chơi khắp Việt Nam và khu vực.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
                  <button key={index} className="text-gray-400 hover:text-violet-400 transition-colors p-2 rounded-lg hover:bg-violet-900/20">
                    <Icon className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Liên kết nhanh</h4>
              <div className="space-y-3">
                {[
                  { label: 'Trang chủ', id: 'home' },
                  { label: 'Giới thiệu', id: 'about' },
                  { label: 'Games', id: 'games' },
                  { label: 'Tuyển dụng', id: 'jobs' },
                  { label: 'Liên hệ', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className="block text-gray-300 hover:text-violet-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Liên hệ</h4>
              <div className="space-y-3 text-gray-300">
                <p>Thôn Yên Trừ, Xã Yên Bình</p>
                <p>Huyện Vĩnh Tường</p>
                <p>Tỉnh Vĩnh Phúc, Việt Nam</p>
                <p className="mt-4 text-violet-400">contact@nganha.org</p>
                <p className="text-violet-400">+84 983 805 469</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-violet-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CTCP Giải trí Số Ngân Hà. Bảo lưu mọi quyền. MST: 0106200859</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SleekCharmWebsite;