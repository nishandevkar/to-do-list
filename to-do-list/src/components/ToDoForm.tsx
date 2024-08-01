import { FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ToDoFormProps {
	register: UseFormRegister<FieldValues>;
	onSubmit: () => void;
}
const ToDoForm = ({ register, onSubmit }: ToDoFormProps) => {
	return (
		<form onSubmit={onSubmit}>
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
	);
};

export default ToDoForm;
