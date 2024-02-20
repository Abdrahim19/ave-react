import { Link, useLocation } from 'react-router-dom';

const Headerlinks = () => {
  const location = useLocation();

  const links = [
    { icon: 'bi bi-house', text: 'Accueil' , path:'/Accueil' },
    { icon: 'bi bi-people-fill', text: 'offreurs' , path:'/offreurs' },
    { icon: 'bi bi-plus-circle', text: 'Plus' , path:'' },
    { icon: 'bi bi-envelope', text: 'Envelope' , path:'/chat' },
  ];

  return (
    <ul className="d-md-flex align-items-center menu-container flex justify-content-between">
      {links.map((link, index) => (
        <li key={index} className={`topmenu-link ${location.pathname === link.path  ? 'active' : ''}`}>
          <Link
            to={link.path}
            className="flex-items gap-2"
          >
            <i className={link.icon}></i>
            {location.pathname === link.path ? link.text : false} {/* Conditionally render the text */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Headerlinks;