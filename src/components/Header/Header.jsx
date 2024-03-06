import "./index.css";

import { useState, useEffect } from 'react';

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector('#to-top');

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
      } else {
        setIsNavbarFixed(false);
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full  ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-primary"
            >
              sandhikagalih
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Clients
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-3 flex items-center pl-8 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input
                      type="checkbox"
                      className="hidden"
                      id="dark-toggle"
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
