import { NavLink } from 'react-router-dom';
import css from './nav.module.css';

console.log(css);


function Nav() {
    return (
        <nav className="nav">
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink to="/profile" className={css.link}>Профиль</NavLink>
                </li>

                <li className={css.item}>
                    <NavLink to="/friends" className={css.link}>Друзья</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;