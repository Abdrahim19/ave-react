import { Link, useLocation } from 'react-router-dom';

const Headerlinks = () => {
  const location = useLocation();

  const links = [
    { icon: 'bi bi-house', text: 'Accueil' , path:'/Accueil' },
    { icon: 'bi bi-people-fill', text: 'offreurs' , path:'/offreurs' },
    { icon: 'bi bi-plus-circle', text: 'Demande' , path:'/' },
    { icon: 'bi bi-envelope', text: 'Messages' , path:'/Messages' },
  ];

  return (
    <ul className="d-md-flex align-items-center menu-container flex justify-content-between">
      {links.map((link, index) => (
        <li key={index} className={`topmenu-link
         ${location.pathname === link.path || link.text === 'Accueil'  ? 'active' : ''}`}>
          <Link
            to={link.path}
            className="flex-items gap-2"
          >
            <i className={link.icon}></i>
            {location.pathname === link.path || link.text === 'Accueil' ? link.text : false}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Headerlinks;
