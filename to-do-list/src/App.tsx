import {
	FormControl,
	Input,
	Heading,
	Center,
	FormLabel,
	Text,
	Button,
	FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

const App = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<div>
			<Center marginY={10}>
				<Heading fontSize="3xl">To Do List</Heading>
			</Center>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl>
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
				</FormControl>
				<Button mt={4} colorScheme="teal" type="submit">
					Submit
				</Button>
			</form>
			<Text></Text>
		</div>
	);
};

export default App;
