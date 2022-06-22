import React from 'react';
import './header.css';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import CTA from './CTA';
import ME from '../../assets/hideo.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Hideo</h1>
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
