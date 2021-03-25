import { SourceDetails } from '../../model/Event';
import * as Txt from '../text';
import * as Btn from '../buttons';
import { useThemeContext } from '../../ThemeProvider';
import { useEffect } from 'react';

export function SourceScreen(props: { sourceDetails: SourceDetails, onClick: Function }) {
    const bgColorClass = "bg-yellow-400"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return (
        <div className={`min-h-full p-2 flex flex-col justify-around items-center ${bgColorClass}`}>
            <Txt.Title value='Sources' col='black' />
            <div className='p-4'>
                <Txt.Paragraph value={props.sourceDetails.description} col='black' />
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
            <div style={{ marginTop: "auto" }}>
                <Btn.Bouncy value='Back' onClick={props.onClick} />
            </div>
        </div>
    )
}