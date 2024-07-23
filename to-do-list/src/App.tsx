import { Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {
	const { handleSubmit, register, reset } = useForm();
	const [toDoList, setToDoList] = useState<string[]>([]);
	const onSubmit = (data: FieldValues) => {
		if (!toDoList.includes(data.name))
			setToDoList([...toDoList, data.name]);
		reset();
	};
	return (
		<div>
			<Center marginY={10}>
				<Heading fontSize="3xl">To Do List</Heading>
			</Center>
			<ToDoForm
				handleSubmit={handleSubmit(onSubmit)}
				register={register}
			></ToDoForm>
			<ToDoList
				toDoList={toDoList}
				onDelete={(eachListItem) =>
					setToDoList(
						toDoList.filter((eachTodo) => eachTodo != eachListItem)
					)
				}
			></ToDoList>
		</div>
	);
};

export default App;
