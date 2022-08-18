import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Category(props) {
	let url = useLocation();
	let data = props.data.nav;
	const listItem = data.map(item => <li key={item.link}><NavLink to={`${url.pathname}${item.link}`}>{item.text}</NavLink></li>);

	return (
		<>

			<h1>Category</h1>
			<ul>
				{listItem}
				{/* <li><NavLink to={`${url.pathname}/notebook`}>Ноутбуки</NavLink></li>
				<li><NavLink to={`${url.pathname}/monitor`}>Мониторы</NavLink></li>
				<li><NavLink to={`${url.pathname}/cellphone`}>Мобильные телефоны</NavLink></li> */}
			</ul>
		</>
	);

}

export default Category;