// import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function CategoryDescription() {
	let {catName} = useParams();
	return (
		<>
			<NavLink to="/cat">Назад</NavLink>
			<h1>Category: {catName}</h1>
		</>
	);
}
export default CategoryDescription;
