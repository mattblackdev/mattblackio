import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center min-w-0">
              {index > 0 && (
                <span className="mx-2 text-gray-400 dark:text-gray-500 flex-shrink-0">/</span>
              )}
              {isLast ? (
                <span className="text-gray-700 dark:text-gray-300 font-medium max-w-[200px] truncate" title={item.label}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href}>
                  <a className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline max-w-[200px] truncate" title={item.label}>
                    {item.label}
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

