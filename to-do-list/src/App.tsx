import { Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export interface ToDoItem {
	id: number;
	desc: string;
	isChecked: boolean;
}
const toDoListTemp: ToDoItem[] = [1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
	return { id: e, desc: e + " task", isChecked: false };
});

const App = () => {
	const { handleSubmit, register, reset } = useForm();
	const [toDoList, setToDoList] = useState<ToDoItem[]>(toDoListTemp);

	const onSubmit = (data: FieldValues) => {
		// Create a new ID for every new item added
		// Ideally the server will generate and send a new ID
		let newId: number = toDoList[toDoList.length - 1].id + 1;
		let newToDoItem: ToDoItem = {
			id: newId,
			desc: data.name,
			isChecked: false,
		};
		// Add to the existing list
		let newToDoList: ToDoItem[] = [...toDoList, newToDoItem];

		setToDoList(newToDoList);
		reset();
	};

	const onDelete = (id: number) => {
		let newList: ToDoItem[] = toDoList.filter((t) => t.id != id);
		setToDoList(newList);
	};

	const onCheck = (id: number) => {
		let selectedTodoObject = toDoList.filter((t) => t.id === id)[0];
		let newList = toDoList.map((eachTodo) =>
			eachTodo.id === selectedTodoObject.id
				? {
						...selectedTodoObject,
						isChecked: !selectedTodoObject.isChecked,
				  }
				: eachTodo
		);
		console.log(newList);

		setToDoList(newList);
	};
	return (
		<div>
			<Center marginY={10}>
				<Heading fontSize="3xl">To Do List</Heading>
			</Center>
			<ToDoForm
				onSubmit={handleSubmit(onSubmit)}
				register={register}
			></ToDoForm>
			<ToDoList
				toDoList={toDoList}
				onDelete={onDelete}
				onCheck={onCheck}
			></ToDoList>
		</div>
	);
};

export default App;
