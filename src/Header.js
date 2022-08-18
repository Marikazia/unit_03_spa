import { NavLink } from "react-router-dom";


function Header() {
  return (
		<>
			<ul>
				<li><NavLink to="/">Главная</NavLink></li>
				<li><NavLink to="/about">O сайте</NavLink></li>
				<li><NavLink to="/cat">Категории</NavLink></li>
			</ul>
		</>
  );
}

export default Header;