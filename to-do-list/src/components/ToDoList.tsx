import { HStack, Checkbox, Button, Icon, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { ToDoItem } from "../App";

interface ToDoListProps {
	toDoList: ToDoItem[];
	onDelete: Function;
	onCheck: Function;
}
const ToDoList = ({ toDoList, onDelete, onCheck }: ToDoListProps) => {
	const [checkedItems, setCheckedItems] = useState(toDoList.map(() => false));
	return (
		<>
			<Box paddingX={28} paddingY={50}>
				<ul className="list-group">
					{toDoList.map((toDoItem) => (
						<li
							className="list-group-item list-group-item-secondary"
							key={toDoItem.id}
							data-bs-theme="dark"
						>
							<HStack
								justifyContent={"space-between"}
								border={2}
								borderColor={"black"}
							>
								<Text
									paddingTop={3.5}
									paddingLeft={3}
									fontWeight={400}
									onClick={(event) => {
										onCheck(toDoItem.id);
									}}
									textDecoration={
										toDoItem.isChecked
											? "line-through"
											: "normal"
									}
								>
									{toDoItem.desc}
								</Text>
								<Button
									type="button"
									boxSize={6}
									backgroundColor={"black"}
									onClick={() => onDelete(toDoItem.id)}
								>
									<Icon as={MdDelete}></Icon>
								</Button>
							</HStack>
						</li>
					))}
				</ul>
			</Box>
		</>
	);
};

export default ToDoList;
