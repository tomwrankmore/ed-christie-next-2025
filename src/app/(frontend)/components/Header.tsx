import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-end px-4 py-2 fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/5m0 border-b border-gray-200">
      <h1>
        {logo ? (
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
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
            <a
              href="https://www.instagram.com/ed_christie_studio/"
              className="hover:underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/user19988565"
              className="hover:underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vimeo"
              title="Vimeo"
            >
              <FaVimeoV size={28}  />
            </a>
          </li>
          {/* <li>
            <Link href="/about" className="hover:underline text-lg">
              about
            </Link>
          </li> */}
          <li>
            <Link href="/contact" className="hover:underline text-lg">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
