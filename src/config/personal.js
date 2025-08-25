export const personal = {
  name: 'Nguyễn Hiền Lương',
  role: 'Fullstack Developer',
  tagline: 'Xây dựng ứng dụng Web, Mobile và Backend chất lượng cao',
  location: 'TP. HCM, Việt Nam',
  email: 'Nguyenhienluong200212@gmail.com',
  avatar: '/newprofile.jpg',

  socials: [
    { name: 'GitHub', url: 'https://github.com/Hienluong0201' },
    { name: 'Facebook', url: 'https://www.facebook.com/luong.nguyenhien.338'},
  ],

  about: `Xin chào! Mình là lập trình viên fullstack có thể đảm nhận cả frontend lẫn backend.
Mình yêu thích tạo ra sản phẩm đẹp, UX gọn gàng và code sạch. Mục tiêu của mình là biến ý tưởng thành ứng dụng hoàn chỉnh,
từ giao diện đến hệ thống backend, một cách nhanh chóng và chất lượng.`,

  skills: [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'React Native', 'Next.js', 'Tailwind CSS',
    'Framer Motion', 'Node.js', 'Express.js', 'REST API', 'GraphQL',
    'MongoDB', 'PostgreSQL', 'Docker', 'Figma', 'Git/GitHub'
  ],

  projects: [
    {
      title: 'Kiot_Viet',
      description: 'Hệ thống dashboard quản lý sản phẩm: nhập hàng, khách hàng, xuất hàng, trả hàng và in hoá đơn.',
      tech: ['React-Native', 'Tailwind', 'Firebase'],
      image: '/projects/project-a.png',
      link: 'https://example.com',
      source: 'https://github.com/vapnguyen24/kiot-viet.git'
    },
    {
      title: 'BonSpa',
      description: 'Ứng dụng quản lý nhân viên: chấm công, phân chia công việc tại nhà khách hàng, theo dõi KPI, tiền lương và tiến độ.',
      tech: ['React Native', 'Zustand', 'i18n', 'Node.js', 'MongoDB'],
      image: '/projects/project-b.png',
      link: 'https://example.com',
      source: 'https://github.com/XTH-CNTT-FPOLY-HCM/FE_BonSpa.git'
    },
    {
      title: 'OutSource-eutc',
      description: 'Bộ giao diện với những bản thống kê',
      tech: ['React-native', 'Zustand'],
      image: '/projects/project-c.png',
      link: 'https://example.com',
      source: 'https://github.com/utc-dev/outsource-eutc'
    }
  ]
}
