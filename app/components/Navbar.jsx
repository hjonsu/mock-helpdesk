import NavMobile from "./NavMobile.jsx";
import NavDesktop from "./NavDesktop.jsx";
import Image from "next/image.js";
import Logo from "../../public/handshake-angle-solid.svg";
const Navbar = (user) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-950 border-b border-neutral-700 z-10 px-5">
      <nav
        id="nav"
        className="flex items-center justify-between w-full md:justify-start py-3 lg:py-5"
      >
        <div className="mx-2">
          <Image src={Logo} alt="Mock helpdesk logo" width={40} quality={100} />
        </div>
        <NavDesktop user={user} />
        <NavMobile user={user} />
      </nav>
    </div>
  );
};

export default Navbar;
