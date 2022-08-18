import React from 'react';
import './header.css';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	return (
		<header id="header">
			<div className="container header__container">
				<h5>Hey there! this is</h5>
				<h1 className="title">Hideo Nishimura</h1>
				<h5 className="text-light">Full Stack developer</h5>
				<CTA />
				<div className="flexer">
					<HeaderSocials />

					<div className="me"></div>

					<a href="#contact" className="scroll__down flexer__item">
						<span className="flipped">Scoll Down</span>
						<BsFillArrowDownCircleFill />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
