import React from "react";
import { Box, Typography, Divider, Container, Avatar } from "@mui/material";
import { ChatBubble } from "./Message";
import { MessageBox } from "./MessageBox";

const MessageWindow: React.FC = () => {
	return (
		<Box
			sx={{
				width: "55%",
				height: "90vh",
				padding: "20px",
				borderRadius: "15px",
				boxShadow: "0px 4px 5px 2px #79C5EF",
			}}
		>
			<Box
				sx={{
					marginBottom: "20px",
					padding: "0px 10px",
					display: "flex",
					gap: "10px",
				}}
			>
				<Avatar
					sx={{
						height: "60px",
						width: "60px",
					}}
				/>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography fontWeight="medium" fontSize="24px">
						Cat Man
					</Typography>
					<Typography fontWeight="light" fontSize="16px">
						Online - Last Seen, 2:02pm
					</Typography>
				</Container>
			</Box>
			<Divider />

			<Box
				sx={{
					maxHeight: "80%",
					overflowY: "auto",
					/* Hide scrollbar */
					"&::-webkit-scrollbar": {
						display: "none",
					},
					"msOverflowStyle": "none", // Hide scrollbar in IE and Edge
					"scrollbarWidth": "none", // Hide scrollbar in Firefox
				}}
			>
				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="me"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="other"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="me"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="other"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="me"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="other"
				/>
				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="me"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="other"
				/>
				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="me"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="other"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="me"
				/>

				<ChatBubble
					message="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
					sender="other"
				/>
			</Box>
				<MessageBox />
		</Box>
	);
};

export default MessageWindow;
