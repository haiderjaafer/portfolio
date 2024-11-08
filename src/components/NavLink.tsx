import Link from "next/link";

const NavLink = ({ href, title }:any) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 text-white hover:text-fuchsia-500 font-extrabold  transition-colors "
    >
      {title}
    </Link>
  );
};

export default NavLink;