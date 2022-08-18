import React from 'react';
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser, BiBookAlt } from 'react-icons/bi';
import { TbHeartHandshake } from 'react-icons/tb';
import { RiContactsBook2Line } from 'react-icons/ri';

import { useState } from 'react';

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('#header');
  
	return (
		<nav>
			<a 
        href="#header" 
        onClick={() => setActiveNav('#header')} 
        className={activeNav === '#header' ? 'active' : ''}
      >
				<AiOutlineHome />
			</a>
			<a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
      >
				<BiUser />
			</a>
			<a 
        href="#experience"
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experence' ? 'active' : ''}
      >
				<BiBookAlt />
			</a>
			<a 
        href="#services"
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#services' ? 'active' : ''}
      >
        <TbHeartHandshake />
			</a>
			<a 
        href="#contacts"
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
      >
				<RiContactsBook2Line />
			</a>
		</nav>
	);
};

export default Navbar;
