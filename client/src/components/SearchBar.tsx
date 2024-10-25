import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
	onSearch: (query: string) => void; // Callback function to handle search queries
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			onSearch(query); // Call the search function on Enter key press
		}
	};

	return (
		<TextField
			variant="outlined"
			placeholder="Search..."
			value={query}
			onChange={handleChange}
			onKeyDown={handleKeyPress}
			fullWidth
			size="medium"
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
					sx:{
						borderRadius: "15px",
						boxShadow : "0px 4px 5px 2px #79C5EF",

					}
				},
			}}
		/>
	);
};

export default SearchBar;
