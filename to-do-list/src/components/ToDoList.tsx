import { HStack, Checkbox, Button, Icon, Box, Text } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

interface ToDoListProps {
	toDoList: string[];
	onDelete: (eachListItem: string) => void;
}
const ToDoList = ({ toDoList, onDelete }: ToDoListProps) => {
	return (
		<>
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
									onClick={() => onDelete(eachListItem)}
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
