import React, { PageNavLink } from '../PageNavLink/PageNavLink';

export const PagesNav = () => (
  <nav className="nav Header__Nav">
    <ul className="Nav__List">
      <li className="Nav__Item">
        <PageNavLink to="/" text="home" />
      </li>
      <li className="Nav__Item">
        <PageNavLink to="/phone_catalog/phones" text="phones" />
      </li>
      <li className="Nav__Item">
        <PageNavLink to="/phone_catalog/tablets" text="tablets" />
      </li>
      <li className="Nav__Item">
        <PageNavLink to="/phone_catalog/accessories" text="accessories" />
      </li>
    </ul>
  </nav>
);
