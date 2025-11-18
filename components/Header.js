import Link from 'next/link';
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

export default function Header({ name }) {
  return (
    <motion.nav
      className="mt-2 p-2 w-full flex dark:text-white"
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
      <Link href="#experience">
        <motion.a
          className="font-extrabold mx-2 leading-loose hover:text-primary cursor-pointer relative group"
          variants={navItemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10">Experience</span>
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
          />
        </motion.a>
      </Link>
      <Link href="#skills">
        <motion.a
          className="font-extrabold mx-2 leading-loose hover:text-primary cursor-pointer relative group"
          variants={navItemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10">Skills</span>
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
          />
        </motion.a>
      </Link>
      <Link href="#projects">
        <motion.a
          className="font-extrabold mx-2 leading-loose hover:text-primary cursor-pointer relative group"
          variants={navItemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10">Projects</span>
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
          />
        </motion.a>
      </Link>
      <Link href="#contact">
        <motion.a
          className="font-extrabold mx-2 leading-loose hover:text-primary cursor-pointer relative group"
          variants={navItemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10">Contact</span>
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
          />
        </motion.a>
      </Link>
    </motion.nav>
  );
}
