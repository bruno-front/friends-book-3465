import { NavLink } from 'react-router-dom';
import css from './nav.module.css';

function Nav() {
    return (
        <nav className="nav">
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => isActive ? css.active : css.link}>
                        Профиль
                    </NavLink>
                </li>

                <li className={css.item}>
                    <NavLink
                        to="/friends"
                        className={({ isActive }) => isActive ? css.active : css.link}>
                        Друзья
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;