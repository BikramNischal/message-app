import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MessageBox: React.FC = () => {
	const [message, setMessage] = useState<string>("");

	const handleMessage = (message: string) => {
		console.log(`Your Message: ${message}`);
		setMessage("");
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleMessage(message); // Call the search function on Enter key press
		}
	};

	return (
		<Box
			sx={{
				marginTop: "10px",
				display: "flex",
				gap: "10px",
			}}
		>
			<TextField
				variant="outlined"
				placeholder="Type your message here..."
				value={message}
				onChange={handleChange}
				onKeyDown={handleKeyPress}
				fullWidth
				size="medium"
				sx={{
					bgcolor: "#EFF6FC",
					borderRadius: "20px",
					padding: "0px 10px",
					border: "none",
					"& fieldset": {
						border: "none",
					},
				}}
			/>

			<Button
				variant="contained"
				onClick={() => {
					handleMessage(message);
				}}
				sx={{
					width: "100px",
					borderRadius: "20px",
				}}
			>
				<SendIcon fontSize="large" />
			</Button>
		</Box>
	);
};
