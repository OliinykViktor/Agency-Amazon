import { NavLink } from 'react-router-dom';

interface INavLinkItem {
  title: string;
  path: string;
}

const NavLinkItem: React.FC<INavLinkItem> = ({
  title,
  path
}) => (
  <NavLink
    to={path}
    className='m-2 mb-0 fs-4 mx-md-4'
  >
    {title}
  </NavLink>
);

export default NavLinkItem;