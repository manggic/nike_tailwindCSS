import { headerLogo } from "../assets/images";

import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((nav) => {
            return (
              <li key={nav.label}>
                {" "}
                <a
                  href={nav.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {nav.label}
                </a>{" "}
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
