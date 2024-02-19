import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Headerlinks = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index:number) => {
    setActiveLink(index);
  };

  const links = [
    { icon: 'bi bi-house', text: 'Accueil' , path:'' },
    { icon: 'bi bi-people-fill', text: 'offreurs' , path:'offreurs' },
    { icon: 'bi bi-plus-circle', text: 'Plus' , path:'' },
    { icon: 'bi bi-envelope', text: 'Envelope' , path:'' },
  ];

  return (
    <ul className="d-md-flex align-items-md-baseline menu-container flex justify-content-between">
      {links.map((link, index) => (
        <li key={index} className={`topmenu-link ${index === activeLink ? 'active' : ''}`}>
          <Link
            to=''
            className="flex-items gap-2"
            onClick={() => handleLinkClick(index)}
          >
            <i className={link.icon}></i>
            {index === activeLink && link.text} {/* Conditionally render the text */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Headerlinks;
