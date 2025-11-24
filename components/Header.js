import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const navItems = [
  { label: 'Experience', href: '/sections/experience', hash: '#experience' },
  { label: 'Education', href: '/sections/education', hash: '#education' },
  { label: 'Volunteer', href: '/sections/volunteer', hash: '#volunteer' },
  { label: 'Skills', href: '/sections/skills', hash: '#skills' },
  { label: 'Projects', href: '/sections/projects', hash: '#projects' },
  { label: 'Contact', href: '/#contact', hash: '#contact' },
];

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const handleHashClick = (e, item) => {
    if (isHomePage && item.hash) {
      e.preventDefault();
      const element = document.querySelector(item.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const getNavLink = (item) => {
    // On home page, use hash links for smooth scrolling
    // On other pages, use full routes
    if (isHomePage && item.hash) {
      return item.hash;
    }
    return item.href;
  };

  const isActive = (item) => {
    if (isHomePage && router.asPath === '/') {
      return false; // No active state on home page for section links
    }
    return router.asPath.startsWith(item.href);
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 mt-2 p-2 w-full flex flex-wrap items-center dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-primary"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Link href="/">
        <motion.a
          className="font-extrabold text-3xl mx-2 hover:text-primary cursor-pointer relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10">Matt Black</span>
          <motion.span
            className="absolute inset-0 bg-primary/10 rounded-lg -z-0"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      </Link>
      <span className="flex-1" />
      <div className="flex flex-wrap items-center gap-1 md:gap-0">
        {navItems.map((item, index) => {
          const active = isActive(item);
          return (
            <Link key={item.label} href={getNavLink(item)}>
              <motion.a
                className={`font-extrabold mx-1 md:mx-2 leading-loose hover:text-primary cursor-pointer relative group text-sm md:text-base ${
                  active ? 'text-primary' : ''
                }`}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onClick={(e) => handleHashClick(e, item)}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  initial={{ width: active ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
