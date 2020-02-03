import React from 'react';
import styled from 'styled-components'

import Link from 'next/link';

const links = [
  { href: '/', label: 'Home', key: 'navlink-home' },
  { href: '/about', label: 'About', key: 'navlink-about' }
]

const Nav = () => {
  const NavList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(${links.length}, min-content);
    gap: 10px;

    li {
      a {
        color: black;
        font-size: 1.5rem;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  `;
  return (
    <nav>
      <NavList>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </NavList>
    </nav>
  )

}

export default Nav

