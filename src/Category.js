import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function Category() {
	let url = useLocation();
	console.log(url);
	let {catName} = useParams();
	console.log({catName});

	return (
		<>

			<h1>Category</h1>
			<ul>
				<li><NavLink to={`${url.pathname}/notebook`}>Ноутбуки</NavLink></li>
				<li><NavLink to={`${url.pathname}/monitor`}>Мониторы</NavLink></li>
				<li><NavLink to={`${url.pathname}/cellphone`}>Мобильные телефоны</NavLink></li>
			</ul>
		</>
	);

}

export default Category;