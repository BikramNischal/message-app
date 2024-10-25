import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.tsx";
import LoginPage from "./components/Login.tsx";
import SignupPage from "./components/Signup.tsx";

// App theme
const appTheme = createTheme({
	palette: {
		background: {
			default: "eff6fc",
		},
		primary: {
			main: "#6e00ff",
			contrastText: "#fff",
		},
		secondary: {
			main: "#e7e7e7",
			contrastText: "#000",
		},
	},
	components: {
		MuiIconButton: {
			styleOverrides: {
				root: {
					transition: "all 0.3s ease",
					"&:hover": {
						backgroundColor: "rgba(255, 0, 0, 0.1)", // Hover background color
						transform: "scale(1.2)", // Scale effect
					},
				},
			},
		},
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: "h2",
					h2: "h2",
					h3: "h2",
					h4: "h2",
					h5: "h2",
					h6: "h2",
					subtitle1: "h2",
					subtitle2: "h2",
					body1: "span",
					body2: "span",
				},
			},
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>Home Page</h1>,
	},
	{
		path: "/app",
		element: <App />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
