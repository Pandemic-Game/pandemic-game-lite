import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonSneaky from '../assets/PNG/Psst2.png';
import ButtonSneakySVG_alt from '../assets/PNG/psst_data.png';
import { SourceDetails } from '../model/Event';

// Primary button
export function Rounded(props: any) {
	return (
		<button
			className={`m-2 p-3 w-full rounded-full bg-${props.bg} text-3xl text-${props.col} font-custom animate-${props.animate}`}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export const Bouncy = (props: any) => {
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
export const Sneaky = (props: any) => {
	return (
		<img className={'flex flex-col h-auto w-64'}
			src={ButtonSneaky}
			alt="Psst need some help deciding?"
			onClick={props.onClick}
		/>
	);
}
export const SneakyFeedback = (props: any) => {
	return (
		<img className={'flex flex-col h-auto w-64'}
			src={ButtonSneakySVG_alt}
			alt="Psst wanna see some data?"
			onClick={props.onClick}
		/>
	);
}

export const ViewSource = (props: { sourceDetails: SourceDetails, onClick: any }) => {
	if (props.sourceDetails.sourceName === ``) {
		return <></>
	} else {
		return (
			<button
				className={`m-2 text-red-500 animate-pulse`}
				onClick={() => { props.onClick(props.sourceDetails) }}
			>
				<FontAwesomeIcon icon={faQuestionCircle} />
			</button>
		);
	}
};
