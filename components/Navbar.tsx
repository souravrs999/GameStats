import Image from "next/image";
import { useRef, useState } from "react";

const NavbarComponent: React.FC = () => {
  const [navCollapsed, setNavCollapsed] = useState<boolean>(true);
  const [lanCollapsed, setLanCollapsed] = useState<boolean>(true);
  const [navHome, setNavHome] = useState<boolean>(false);
  const [navCatalog, setNavCatalog] = useState<boolean>(false);
  const [navNews, setNavNews] = useState<boolean>(false);
  const [navHelp, setNavHelp] = useState<boolean>(false);
  const [navMore, setNavMore] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <button
                  className={`header__menu ${
                    navCollapsed ? "" : "header__menu--active"
                  }`}
                  type="button"
                  onClick={() => setNavCollapsed(!navCollapsed)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <a href="index.html" className="header__logo">
                  <Image
                    src="/img/gamestats-logo-full.png"
                    alt="Game Stats logo"
                    height={35}
                    width={100}
                  />
                </a>

                <ul
                  className={`header__nav ${
                    navCollapsed ? "" : "header__nav--active"
                  }`}
                >
                  <li className={`header__nav-item ${navHome ? "show" : ""}`}>
                    <a
                      className="header__nav-link"
                      role="button"
                      id="dropdownMenu0"
                      onClick={() => setNavHome(!navHome)}
                    >
                      Home{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="48"
                          d="M112 184l144 144 144-144"
                        />
                      </svg>
                    </a>

                    <ul
                      className={`dropdown-menu header__nav-menu ${
                        navHome ? "show" : ""
                      }`}
                    >
                      <li>
                        <a href="index.html">Home style 1</a>
                      </li>
                      <li>
                        <a href="index2.html">Home style 2</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`header__nav-item ${navCatalog ? "show" : ""}`}
                  >
                    <a
                      className="header__nav-link"
                      role="button"
                      id="dropdownMenu1"
                      onClick={() => setNavCatalog(!navCatalog)}
                    >
                      Catalog{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="48"
                          d="M112 184l144 144 144-144"
                        />
                      </svg>
                    </a>

                    <ul
                      className={`dropdown-menu header__nav-menu ${
                        navCatalog ? "show" : ""
                      }`}
                      aria-labelledby="dropdownMenu1"
                    >
                      <li>
                        <a href="catalog.html">Catalog (sidebar left)</a>
                      </li>
                      <li>
                        <a href="catalog2.html">Catalog (sidebar right)</a>
                      </li>
                      <li>
                        <a href="category.html">Category page</a>
                      </li>
                      <li>
                        <a href="details.html">Details style 1</a>
                      </li>
                      <li>
                        <a href="details2.html">Details style 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="index.html#"
                      role="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      News{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="48"
                          d="M112 184l144 144 144-144"
                        />
                      </svg>
                    </a>

                    <ul
                      className="dropdown-menu header__nav-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <li>
                        <a href="news.html">News (small grid)</a>
                      </li>
                      <li>
                        <a href="news2.html">News (big grid)</a>
                      </li>

                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item"
                          href="index.html#"
                          role="button"
                          id="dropdownMenuSub"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Single page
                        </a>

                        <ul
                          className="dropdown-menu header__nav-menu"
                          aria-labelledby="dropdownMenuSub"
                        >
                          <li>
                            <a href="article.html">Article</a>
                          </li>
                          <li>
                            <a href="interview.html">Interview</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="faq.html">
                      Help Center
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link header__nav-link--more"
                      href="index.html#"
                      role="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 512 512"
                      >
                        <circle
                          cx="256"
                          cy="256"
                          r="32"
                          style={{
                            fill: "none",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <circle
                          cx="416"
                          cy="256"
                          r="32"
                          style={{
                            fill: "none",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <circle
                          cx="96"
                          cy="256"
                          r="32"
                          style={{
                            fill: "none",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                    </a>

                    <ul
                      className="dropdown-menu header__nav-menu header__nav-menu--scroll"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="favorites.html">Favorites</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="signin.html">Sign in</a>
                      </li>
                      <li>
                        <a href="signup.html">Sign up</a>
                      </li>
                      <li>
                        <a href="forgot.html">Forgot password</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy policy</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="header__actions">
                  <div className={`header__lang ${lanCollapsed ? "" : "show"}`}>
                    <a
                      className="header__lang-btn"
                      role="button"
                      id="dropdownMenuLang"
                      onClick={() => setLanCollapsed(!lanCollapsed)}
                    >
                      <Image
                        src="/img/flags/uk.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                      <span> EN</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 512 512"
                      >
                        <path d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z" />
                      </svg>
                    </a>

                    <ul
                      className={`dropdown-menu header__lang-menu ${
                        lanCollapsed ? "" : "show"
                      }`}
                    >
                      <li>
                        <a href="index.html#">
                          <Image
                            src="/img/flags/spain.svg"
                            alt=""
                            height={20}
                            width={20}
                          />
                          <span> SP</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#">
                          <Image
                            src="/img/flags/russia.svg"
                            alt=""
                            height={20}
                            width={20}
                          />
                          <span> RU</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#">
                          <Image
                            src="/img/flags/china.svg"
                            alt=""
                            height={20}
                            width={20}
                          />
                          <span> CH</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a href="signin.html" className="header__login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                      <polyline
                        points="288 336 368 256 288 176"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                      <line
                        x1="80"
                        y1="256"
                        x2="352"
                        y2="256"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                    </svg>
                    <span>Sign in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <form action="index.html#" className="header__form">
                  <input
                    type="text"
                    className="header__input"
                    placeholder="I'm searching for..."
                  />
                  <select className="header__select">
                    <option value="0">All Categories</option>
                    <option value="1">Action</option>
                    <option value="3">Adventure</option>
                    <option value="4">Fighting</option>
                    <option value="5">Flight simulation</option>
                    <option value="6">Platform</option>
                    <option value="7">Racing</option>
                    <option value="8">RPG</option>
                    <option value="9">Sports</option>
                    <option value="10">Strategy</option>
                    <option value="11">Survival horror</option>
                  </select>
                  <button className="header__btn" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                        style={{
                          fill: "none",
                          strokeMiterlimit: 10,
                          strokeWidth: "32px",
                        }}
                      />
                      <line
                        x1="338.29"
                        y1="338.29"
                        x2="448"
                        y2="448"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                          strokeWidth: "32px",
                        }}
                      />
                    </svg>
                  </button>
                </form>

                <div className="header__actions header__actions--2">
                  <a href="favorites.html" className="header__link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                    </svg>
                    <span>Favorites</span>
                  </a>

                  <a href="checkout.html" className="header__link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <circle
                        cx="176"
                        cy="416"
                        r="16"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                      <circle
                        cx="400"
                        cy="416"
                        r="16"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                      <polyline
                        points="48 80 112 80 160 352 416 352"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                      <path
                        d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                    </svg>
                    <span>$00.00</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
