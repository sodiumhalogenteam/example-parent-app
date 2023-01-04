import React from "react";
import aaStandardLogo from "../assets/images/aa-standard.svg";

const MainLayout = () => (
  <aside className="l-view-layout__sidebar">
    <div className="c-sidebar">
      <div className="c-sidebar__header">
        <div className="c-logo">
          <img src={aaStandardLogo} className="c-logo__image" alt="logo" />
        </div>
      </div>
      <div className="c-sidebar__main">
        <nav className="c-primary-nav" role="navigation">
          <ul className="c-primary-nav__list">
            <li className="c-primary-nav__item">
              <a href="#" className="c-primary-nav__link">
                <span className="c-primary-nav__icon fal fa-heart-rate"></span>
                Dashboard
              </a>
            </li>
            <li className="c-primary-nav__item">
              <a href="#" className="c-primary-nav__link is-active">
                <span className="c-primary-nav__icon fal fa-walkie-talkie"></span>
                Manage Tools
              </a>
            </li>
            <li className="c-primary-nav__item">
              <a href="#" className="c-primary-nav__link">
                <span className="c-primary-nav__icon fal fa-users"></span>
                Manage Users
              </a>
              <ul className="c-primary-nav__subList">
                <li className="c-primary-nav__subItem">
                  <a href="#" className="c-primary-nav__link">
                    Current Users
                  </a>
                </li>
                <li className="c-primary-nav__subItem">
                  <a href="#" className="c-primary-nav__link">
                    Signup links
                  </a>
                </li>
                <li className="c-primary-nav__subItem">
                  <a href="#" className="c-primary-nav__link">
                    Dicrectory Services
                  </a>
                </li>
              </ul>
            </li>
            <li className="c-primary-nav__item">
              <a
                href="#"
                className="c-primary-nav__link c-primary-nav__link--plus-promo"
              >
                <span className="c-primary-nav__icon fal fa-chart-pie"></span>
                View Reports
              </a>
              <ul className="c-primary-nav__subList">
                <li className="c-primary-nav__subItem">
                  <a
                    href="#"
                    className="c-primary-nav__link c-primary-nav__link--plus-promo"
                  >
                    Shop Actions
                  </a>
                </li>
                <li className="c-primary-nav__subItem">
                  <a
                    href="#"
                    className="c-primary-nav__link c-primary-nav__link--plus-promo"
                  >
                    User Actions
                  </a>
                </li>
                <li className="c-primary-nav__subItem">
                  <a
                    href="#"
                    className="c-primary-nav__link c-primary-nav__link--plus-promo"
                  >
                    Tool Actions
                  </a>
                </li>
              </ul>
            </li>
            <li className="c-primary-nav__item">
              <a href="#" className="c-primary-nav__link">
                <span className="c-primary-nav__icon fal fa-garage-open"></span>
                Enterprise Name
              </a>
            </li>
            <li className="c-primary-nav__item">
              <a href="#" className="c-primary-nav__link">
                <span className="c-primary-nav__icon fal fa-user"></span>
                Username
              </a>
            </li>
          </ul>
        </nav>
        <ul className="c-sidebar__links">
          <li>
            <button className="c-btn-dark c-btn-full">
              <div className="c-btn__inner">Compare Plans</div>
            </button>
          </li>
          <li>
            <a href="#" className="c-sidebar__link c-btn-link-bare">
              <div className="c-btn__inner">
                <i className="c-btn__icon fal fa-question-circle" />
                Support
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="c-sidebar__link c-btn-link-bare">
              <div className="c-btn__inner">
                <i className="c-btn__icon fal fa-sign-out" />
                Logout
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
  //   <div className="l-view-layout__main l-view-layout--two-column">
  //     <EmbedProvider />
  //   </div>
);

export default MainLayout;
