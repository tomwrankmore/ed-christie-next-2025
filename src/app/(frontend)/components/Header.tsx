import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-end px-4 py-2 bg-slate-200 text-white">
      <h1>
        {logo ? (
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="logo"
            />
          </Link>
        ) : (
          <Link href="/">Ed Christie</Link>
        )}
      </h1>
      <nav>
        <ul className="flex space-x-4 text-black">
          <li>
            <Link href="/work" className="hover:underline">
              work
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              about
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
