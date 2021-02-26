import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonSneakySVG from '../assets/SVG/ButtonSneaky.svg';
import ButtonSneakySVG_alt from '../assets/SVG/ButtonSneaky_Alt.svg';

// Primary button
export function Rounded(props) {
	return (
		<button 
			className={`m-2 p-3 w-full rounded-full bg-${props.bg} text-3xl text-${props.col} font-custom animate-${props.animate}`}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export function Bouncy(props) {
	return (
		<button 
			className={`m-2 p-3 rounded-full bg-${props.bg} text-3xl text-${props.col} font-custom animate-bounce`}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

// Extra info
export function Sneaky(props) {
	return (
		<img className={'flex flex-col h-auto w-64'} 
			src={ButtonSneakySVG} 
			alt="Psst need some help deciding?" 
			onClick={props.onClick}
		/>
	);
}
export function SneakyFeedback(props) {
	return (
		<img className={'flex flex-col h-auto w-64'} 
			src={ButtonSneakySVG_alt} 
			alt="Psst wanna see some data?" 
			onClick={props.onClick}
		/>
	);
}

export function ViewSource(props){
	return (
		<button 
			className={`m-2 text-red-700 animate-pulse`}
			onClick={props.onClick}
		>
			<FontAwesomeIcon icon={faQuestionCircle} />
		</button>
	);
};
