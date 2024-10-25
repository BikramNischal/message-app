import React from "react";
import { useTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import SearchableContact from "./components/SearchableContact";
import MessageWindow from "./components/MessageWindow";

const App: React.FC = () => {
	const theme = useTheme();
	return (
		<div
			style={{
				background: theme.palette.background.default,
				display: "flex",
				flexDirection: "row",
				padding: "20px",
				width: "100%"
			}}
		>
			<NavBar />
			<SearchableContact />
			<MessageWindow />
		</div>
	);
};

export default App;
