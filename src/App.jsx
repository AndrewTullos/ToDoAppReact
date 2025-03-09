import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Todo from "./pages/ToDoPage";
import NotFound from "./pages/NotFoundPage";

function App() {
	return (
		<Router>
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/todo" element={<Todo />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
