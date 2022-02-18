
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects";

export const AppRouter = () => {
	return (
			<BrowserRouter>
				<NavBar />
				<Routes className="bg-deskImage">
					<Route path="/contact" element = { <Contact /> } />
					<Route path="/projects" element = { <Projects /> } />
					<Route path="/" element = { <Home /> } />
				</Routes>
			</BrowserRouter>
	)
}
