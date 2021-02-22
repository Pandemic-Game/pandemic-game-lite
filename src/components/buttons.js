// Primary button
export function Rounded(props) {
	return (
		<button 
			className={`w-100 m-2 btn RoundedButton ${props.className}`}
			onClick={props.onClick} 
		>
			{props.value}
		</button>
	);
}

// Extra info
export function Sneaky(props) {
	return (
		<button 
			className={`w-100 m-2 btn SneakyButton ${props.className}`}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export function ViewSource(props){
	return (
		<button 
			className='ViewSourceButton'
			onClick={props.onClick}
		>
			<i class="fas fa-question-circle"></i>
		</button>
	);
};
