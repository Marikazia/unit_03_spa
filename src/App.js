
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from "./CategoryDescription";
import Footer from './Footer';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const navProps = {
  nav: [
    { "link": "/", "text": "Главная" },
    { "link": "/about", "text": "О сайте" },
    { "link": "/cat", "text": "Категории" },
  ]
}

const catProps = {
	nav: [
		{ "link": "/notebook", "text": "Ноутбуки" },
		{ "link": "/monitor", "text": "Мониторы" },
		{ "link": "/cellphone", "text": "Мобильные телефоны" }
	]

}

function App() {
  return (
		<>
			<Router>
				<Header data={navProps} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />					
					<Route exact path="/cat" element={<Category data={catProps} />} />
					<Route path="cat/:catName" element={<CategoryDescription />} />
					<Route path="*" element={< Error/>} />
				</Routes>

				<Footer />
			</Router>
		</>
  );
}

export default App;
