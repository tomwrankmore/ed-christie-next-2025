import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-start px-4 py-2 fixed top-0 left-0 right-0 z-10">
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
          {/* <li>
            <Link href="/work" className="hover:underline">
              work
            </Link>
          </li> */}
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
