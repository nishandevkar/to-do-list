import {
	FormControl,
	Input,
	Heading,
	Center,
	FormLabel,
	Button,
	Text,
	HStack,
	Icon,
	Box,
	Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { MdDelete } from "react-icons/md";

const App = () => {
	const { handleSubmit, register } = useForm();
	const [toDoList, setToDoList] = useState<string[]>([]);
	const onSubmit = (data: FieldValues) => {
		if (!toDoList.includes(data.name))
			setToDoList([...toDoList, data.name]);
	};
	return (
		<div>
			<Center marginY={10}>
				<Heading fontSize="3xl">To Do List</Heading>
			</Center>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl paddingX={10}>
					<FormLabel>Add a new item</FormLabel>
					<Input
						id="name"
						placeholder="Start adding..."
						{...register("name", {
							required: "This is required",
							minLength: {
								value: 4,
								message: "Minimum length should be 4",
							},
						})}
					/>

					<Button mt={4} colorScheme="teal" type="submit">
						Submit
					</Button>
				</FormControl>
			</form>
			<Box paddingX={28} paddingY={50}>
				<ul className="list-group">
					{toDoList.map((eachListItem) => (
						<li
							className="list-group-item list-group-item-secondary"
							key={toDoList.indexOf(eachListItem)}
							data-bs-theme="dark"
						>
							<HStack
								justifyContent={"space-between"}
								border={2}
								borderColor={"black"}
							>
								<Checkbox>
									<Text
										paddingTop={3.5}
										paddingLeft={3}
										fontWeight={400}
										textDecoration={"line-through"}
									>
										{eachListItem}
									</Text>
								</Checkbox>
								<Button
									type="button"
									boxSize={6}
									backgroundColor={"black"}
									onClick={() => {
										setToDoList(
											toDoList.filter(
												(eachTodo) =>
													eachTodo != eachListItem
											)
										);
									}}
								>
									<Icon as={MdDelete}></Icon>
								</Button>
							</HStack>
						</li>
					))}
				</ul>
			</Box>
		</div>
	);
};

export default App;
