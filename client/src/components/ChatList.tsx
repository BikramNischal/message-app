import React from "react";
import { Box, Typography, List, Divider } from "@mui/material";

import ChatListItem from "./ChatListItem";
import { IChatListProp } from "../model/chat.model";

const ChatList: React.FC<IChatListProp> = ({
	chats,
	chatName,
	chatListHeight,
}: IChatListProp) => {
	const chatList = chats.map((chat, index) => (
		<React.Fragment key={chat.id}>
			<ChatListItem chat={chat} />
			{index < chats.length - 1 && <Divider />}
		</React.Fragment>
	));

	return (
		<Box
			sx={{
				borderRadius: "15px",
				boxShadow: "0px 4px 5px 2px #79C5EF",
				height: `${chatListHeight}%`,
				padding: "10px 20px",
			}}
		>
			<Typography variant="h6">{chatName}</Typography>

			{/* Render List of groups */}
			<List
				sx={{
					overflowY: "auto",
					flexGrow: 1,
					maxHeight: "90%",
					/* Hide scrollbar */
					"&::-webkit-scrollbar": {
						display: "none",
					},
					"msOverflowStyle": "none", // Hide scrollbar in IE and Edge
					"scrollbarWidth": "none", // Hide scrollbar in Firefox
				}}
			>
				{chatList}
			</List>
		</Box>
	);
};

export default ChatList;
