import React from "react";

const ToDoItems = ({ text, deleteTask }) => {
	return (
		<div className="flex items-center my-3 gap-2">
			<div className="flex flex-1 items-center cursor-pointer">
				{/* COMPLETED */}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="green"
					className="size-7"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>

				{/* To Do Text */}

				<p className="text-neutral-100 ml-4 text-[17px] ">{text}</p>
			</div>

			{/* TRASH */}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="red"
				className="size-7 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:stroke-amber-400"
				onClick={deleteTask}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
				/>
			</svg>
		</div>
	);
};

export default ToDoItems;

// {/* IN PROGRESS */}
// <svg
// xmlns="http://www.w3.org/2000/svg"
// fill="none"
// viewBox="0 0 24 24"
// strokeWidth={1.5}
// stroke="orange"
// className="size-7"
// >
// <path
//    strokeLinecap="round"
//    strokeLinejoin="round"
//    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
// />
// </svg>
