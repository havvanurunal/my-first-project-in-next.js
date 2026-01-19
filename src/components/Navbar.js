import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-8 max-w-4xl mx-auto justify-center font-sans">
        <li>
          <Link href={'/'} className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href={'/about'} className="hover:underline">About</Link>
        </li>
      </ul>
    </nav>
  );
}