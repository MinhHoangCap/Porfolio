import React from 'react'
import {Link } from 'react-scroll'

import "../css/header.css"

export const HeaderPage = () => {
  return (
    <header className="header">
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link className='navigation__link' to="about-me">Trang chu</Link>
                </li>
                <li className="navigation__item">
                    <Link className='navigation__link' to="about-me">Gioi thieu</Link>
                </li>
                <li className="navigation__item">
                    <Link className='navigation__link' to="resume">Tom tat</Link>
                </li>
                <li className="navigation__item">
                    <Link className='navigation__link' to="contact">Lien he</Link>
                </li>
            </ul>

        </nav>

    </header>
  )
}
