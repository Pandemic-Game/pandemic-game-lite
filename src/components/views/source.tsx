import { SourceDetails } from '../../model/Event';
import * as Txt from '../text';
import * as Btn from '../buttons';

export function SourceScreen(props: {sourceDetails: SourceDetails, onClick: Function}){
    return (
        <div className='min-h-full p-2 flex flex-col justify-around items-center bg-yellow-400'>
            <Txt.Title value='Sources' col='black'/>
            <div className='p-4'>
                <Txt.Paragraph value={props.sourceDetails.description} col='black'/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Txt.Subtitle value='Link:' col='black' />
                <a 
                    href={props.sourceDetails.link} 
                    className='underline' 
                    target='_blank'
                    rel='noreferrer'
                > 
                    {props.sourceDetails.sourceName}  
                </a>
            </div>
            <Btn.Bouncy value='Back' onClick={props.onClick} />
        </div>
    )
}