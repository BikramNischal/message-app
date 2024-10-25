import React from "react";
import {
	Box,
	Typography,
	ListItemButton,
	ListItemAvatar,
	Avatar,
	ListItemText,
} from "@mui/material";

import { IChatProp } from "../model/chat.model";

const ChatListItem: React.FC<IChatProp> = ({ chat }: IChatProp) => {
	return (
		<ListItemButton>
			<ListItemAvatar>
				<Avatar alt="Profile Picture" src={chat.profilePic} />
			</ListItemAvatar>
			<ListItemText
				primary={
					<Box display="flex" justifyContent="space-between">
						<Typography variant="subtitle1" fontWeight="bold">
                            {chat.name}
						</Typography>
						<Typography variant="body2" color="textSecondary">
                            {chat.date.toDateString()}
						</Typography>
					</Box>
				}
				secondary={
					<Box display="flex" justifyContent="space-between">
						<Typography
							component="span"
							variant="body2"
							color="textPrimary"
							noWrap
						>
                            {chat.lastMessage}
						</Typography>
						<Typography
							component="span"
							variant="caption"
							color="white"
							width="20px"
							height="20px"
							textAlign="center"
							borderRadius="50%"
							bgcolor="red"
						>
                            {chat.unReadCount}
						</Typography>
					</Box>
				}
			/>
		</ListItemButton>
	);
};

export default ChatListItem;
