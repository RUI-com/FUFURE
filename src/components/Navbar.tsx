import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
export const Navbar = () => {
  return (
    <header className="header">
            {/* <!-- ===== NAV ===== --> */}
            <nav className="nav grid">
                <div className="nav__toggle" id="nav-toggle">
                    <img src="/icons/icon-menu.svg" alt=""/>
                </div>

                <div>
                    <a ><img className="nav__logo" src="/logo/logo-c.svg" alt=""/></a>
                </div>

                {/* <!-- ===== NAV LIST ===== --> */}
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="" className="nav__link">MEN</a></li>
                        <li className="nav__item"><a href="" className="nav__link">WOMEN</a></li>
                        <li className="nav__item"><a href="" className="nav__link">KIDS</a></li>
                        <li className="nav__item"><a href="" className="nav__link">CUSTOMIZE</a></li>
                        <li className="nav__item"><a href="" className="nav__link">SALE</a></li>
                    </ul>
                </div>

                <div className="nav__shop">
                    <img src="/icons/shopping-bag.svg" alt=""/>
                </div>
            </nav>
        </header>
  )
}
