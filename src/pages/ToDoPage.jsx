import React, { useState } from "react";
import ToDoItems from "../components/ToDoItems";

function Todo() {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleAddTask = () => {
		if (inputValue.trim() === "") return;
		setTasks([...tasks, inputValue]);
		setInputValue("");
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleAddTask();
		}
	};

	const deleteTask = (taskIndex) => {
		setTasks(tasks.filter((_, index) => index !== taskIndex));
	};

	return (
		<div className="bg-stone-900/20 grid py-4 min-h-screen text-neutral-50">
			<div className="bg-neutral-50/10 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
				{/* TITLE */}

				<div className="flex items-center justify-center mt-7 gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
						/>
					</svg>
					<h1 className="text-3xl font-semibold">To-Do List</h1>
				</div>

				{/* INPUT BOX */}

				<div className="flex items-center my-7 bg-gray-200 rounded-full">
					<input
						className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 text-slate-950"
						type="text"
						value={inputValue}
						onKeyDown={handleKeyDown}
						placeholder="Add your task..."
						onChange={handleInputChange}
					/>
					<button
						className="border-none rounded-full bg-indigo-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
						onClick={handleAddTask}
					>
						ADD +
					</button>
				</div>

				{/* TODO LIST */}

				<div>
					{tasks.map((task, index) => (
						<ToDoItems
							key={index}
							text={task}
							deleteTask={() => deleteTask(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Todo;
