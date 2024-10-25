import React from "react";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import ChatList from "./ChatList";

import IChat from "../model/chat.model";

const SearchableContact: React.FC = () => {
	const handleSearch = (query: string) => {
		console.log("Search query:", query);
		// Implement your search logic here
	};

	// Groups Chat list
	const groups: IChat[] = [
		{
			id: 1,
			name: "Cats Forever",
			lastMessage: "Meow Meow!",
			profilePic: "/cats.jpg",
			date: new Date("2023-10-01"),
			unReadCount: 4,
		},
		{
			id: 2,
			name: "Cat Gang",
			lastMessage: "Meow Again!",
			profilePic: "/cats.jpg",
			date: new Date("2023-11-05"),
			unReadCount: 2,
		},
		{
			id: 3,
			name: "Cat Gang Gang",
			lastMessage: "Meow Again!",
			profilePic: "/cats.jpg",
			date: new Date("2023-11-05"),
			unReadCount: 2,
		},
	];

	// Groups Chat list
	const friends: IChat[] = [
		{
			id: 1,
			name: "Elon Musk",
			lastMessage: "Hello I'm  Elon!",
			profilePic: "/cat1.png",
			date: new Date("2023-10-01"),
			unReadCount: 4,
		},
		{
			id: 2,
			name: "Bill Gates",
			lastMessage: "Hello I'm Bill!",
			profilePic: "/cat2.jpg",
			date: new Date("2023-11-05"),
			unReadCount: 2,
		},
		{
			id: 3,
			name: "Elon Musk",
			lastMessage: "Hello I'm  Elon!",
			profilePic: "/cat1.png",
			date: new Date("2023-10-01"),
			unReadCount: 4,
		},
		{
			id: 4,
			name: "Bill Gates",
			lastMessage: "Hello I'm Bill!",
			profilePic: "/cat2.jpg",
			date: new Date("2023-11-05"),
			unReadCount: 2,
		},
		{
			id: 5,
			name: "Elon Musk",
			lastMessage: "Hello I'm  Elon!",
			profilePic: "/cat1.png",
			date: new Date("2023-10-01"),
			unReadCount: 4,
		},
	];

	return (
		<Box
			sx={{
				width: "35%",
				height: "90vh",
				margin: "0 40px",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<SearchBar onSearch={handleSearch} />
			<ChatList chats={groups} chatName="Groups" chatListHeight={35} />
			<ChatList chats={friends} chatName="People" chatListHeight={52} />
		</Box>
	);
};

export default SearchableContact;
