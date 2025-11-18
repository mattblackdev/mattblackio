import Link from 'next/link';

export default function Header({ name }) {
  return (
    <nav className="mt-2 p-2 w-full flex dark:text-white">
      <Link href="/">
        <a className="font-extrabold text-3xl mx-2 hover:text-primary">
          Matt Black
        </a>
      </Link>
      <span className="flex-1" />
      <Link href="#experience">
        <a className="font-extrabold mx-2 leading-loose hover:text-primary">
          Experience
        </a>
      </Link>
      <Link href="#skills">
        <a className="font-extrabold mx-2 leading-loose hover:text-primary">
          Skills
        </a>
      </Link>
      <Link href="#projects">
        <a className="font-extrabold mx-2 leading-loose hover:text-primary">
          Projects
        </a>
      </Link>
      <Link href="#contact">
        <a className="font-extrabold mx-2 leading-loose hover:text-primary">
          Contact
        </a>
      </Link>
    </nav>
  );
}
