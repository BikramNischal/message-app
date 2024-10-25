import React from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";

interface ChatBubbleProps {
	message: string;
	sender: "me" | "other"; // 'me' for current user, 'other' for the other person
}

interface AvatarProps{
    sender: "me" | "other"
}


const RenderAvatar: React.FC<AvatarProps> = ({sender}) => {
    if(sender === "other")
        return  <Avatar />
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "flex-start",
                alignItems:"end",
				flexDirection: sender === "me" ? "row-reverse" : "row",
				margin: "8px 0",
				gap: "5px",
			}}
		>
            <RenderAvatar sender={sender} />
			<Box
				sx={{
					bgcolor:
						sender === "me"
							? theme.palette.primary.main
							: theme.palette.secondary.main,
					color:
						sender === "me"
							? theme.palette.primary.contrastText
							: theme.palette.secondary.contrastText,
					maxWidth: "60%",
					borderRadius:
						sender === "me"
							? "15px 15px 0 15px"
							: "15px 15px 15px 0",
					padding: "10px 20px",
					wordWrap: "break-word",
				}}
			>
				<Typography
					sx={{
						fontSize: "14px",
					}}
				>
					{message}
				</Typography>
			</Box>
		</Box>
	);
};
