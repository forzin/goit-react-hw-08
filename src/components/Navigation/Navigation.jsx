import { NavLink} from 'react-router-dom';

import clsx from 'clsx';
import styles from './Navigation.module.css';

export const activeLink = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  
  return (
    <div>
      <div className={styles.linkList}>
          <NavLink className={activeLink} to='/'>Home page</NavLink>
      </div>
    </div>
  );
}

export default Navigation;