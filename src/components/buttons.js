import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonSneakySVG from '../assets/SVG/ButtonSneaky.svg';
import ButtonSneakySVG_alt from '../assets/SVG/ButtonSneaky_Alt.svg';

// Primary button
export function Rounded(props) {
	return (
		<button 
			className={`m-2 p-2 rounded bg-${props.bg} text-3xl text-${props.col} font-custom animate-${props.animate}`}
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
			className={`p-2 rounded bg-${props.bg} text-3xl text-${props.col} font-custom`}
			onClick={props.onClick}
		>
			<img className={'h-auto w-96'} src={ButtonSneakySVG} alt="Psst need some help deciding?" />
		</button>
	);
}
export function SneakyFeedback(props) {
	return (
		<button 
			className={`p-2 rounded bg-${props.bg} text-3xl text-${props.col} font-custom`}
			onClick={props.onClick}
		>
			<img className={'h-auto w-96'} src={ButtonSneakySVG_alt} alt="Psst wanna see some data?" />
		</button>
	);
}

export function ViewSource(props){
	return (
		<button 
			className={`p-1 bg-none col-${props.col} animate-pulse`}
			onClick={props.onClick}
		>
			<FontAwesomeIcon icon={faQuestionCircle} />
		</button>
	);
};
