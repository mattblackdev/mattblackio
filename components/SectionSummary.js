import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionSummary({ title, summary, link, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '200px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <Link href={link}>
        <motion.a
          className="block p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="text-3xl mb-3 font-bold">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{summary}</p>
          <motion.span
            className="text-primary font-semibold inline-flex items-center"
            whileHover={{ x: 5 }}
          >
            Read more →
          </motion.span>
        </motion.a>
      </Link>
    </motion.div>
  );
}

