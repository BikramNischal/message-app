import { Toolbar, IconButton, Box, Tooltip, Avatar } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useTheme } from "@mui/material";
import React from "react";

const NavBar: React.FC = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: "fix",
				height: "90vh",
				width: "5%",
				padding: "10px",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				bgcolor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
					height: "100%",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}
				>
					<Box>
						<Tooltip title="Profile">
							<IconButton size="large">
								<Avatar alt="User Profile Picture" src="/cat1.png" />
							</IconButton>
						</Tooltip>
					</Box>
					<Box sx={{ display: "flex" }}>
						<IconButton
							size="large"
							aria-label="Home"
							color="inherit"
						>
							<HomeOutlinedIcon fontSize={"large"} />
						</IconButton>
					</Box>

					<Box sx={{ display: "flex" }}>
						<IconButton
							size="large"
							aria-label="Message"
							color="inherit"
						>
							<SmsOutlinedIcon fontSize={"large"} />
						</IconButton>
					</Box>

					<Box sx={{ display: "flex" }}>
						<IconButton
							size="large"
							aria-label="Message"
							color="inherit"
						>
							<NotificationsOutlinedIcon fontSize={"large"} />
						</IconButton>
					</Box>

					<Box sx={{ display: "flex" }}>
						<IconButton
							size="large"
							aria-label="Message"
							color="inherit"
						>
							<SettingsOutlinedIcon fontSize={"large"} />
						</IconButton>
					</Box>
				</Box>
				<Box sx={{ display: "flex" }}>
					<IconButton
						size="large"
						aria-label="Message"
						color="inherit"
					>
						<ExitToAppOutlinedIcon fontSize={"large"} />
					</IconButton>
				</Box>
			</Toolbar>
		</Box>
	);
};

export default NavBar;