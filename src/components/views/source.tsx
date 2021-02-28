import { SourceDetails } from '../../model/Event';
import * as Txt from '../text';
import * as Btn from '../buttons';

export function SourceScreen(props: {sourceDetails: SourceDetails, onClick: Function}){
    return (
        <div className='min-h-full p-2 flex flex-col justify-around items-center bg-yellow-400'>
            <Txt.Title value='Sources' col='black'/>
            <Txt.Paragraph value={props.sourceDetails.description} col='black'/>
            <a 
                href={props.sourceDetails.link} 
                className='text-blue' 
            > 
                {props.sourceDetails.sourceName}  
            </a>
            <Btn.Bouncy value='Back' onClick={props.onClick} />
        </div>
    )
}