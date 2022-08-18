import { NavLink } from "react-router-dom";


function Header(props) {
	let data = props.data.nav;
	const listItem = data.map(item => <li key={item.link}><NavLink to={item.link}>{item.text}</NavLink></li>);
  return (
		<>
			<ul>
				{listItem}
				{/* <ul>
					<li><NavLink to="/">Главная</NavLink></li>
					<li><NavLink to="/about">O сайте</NavLink></li>
					<li><NavLink to="/cat">Категории</NavLink></li>
				</ul> */}
			</ul>
		</>
  );
}

export default Header;