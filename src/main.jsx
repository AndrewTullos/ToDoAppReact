import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StarsCanvas from "./components/StarBackground.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StarsCanvas />
		<App />
	</StrictMode>
);
