import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLaughBeam, faAngry} from '@fortawesome/free-solid-svg-icons';
import {ResponseItem} from '../model/Response';
import * as Txt from './text';

export function Tweet(props: {fb: ResponseItem}){
    return (
        <div className='w-auto p-2 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl'>
            <div className='absolute -top-2 -left-2 rounded-full bg-white'>
                <FontAwesomeIcon 
                    icon={props.fb.isHappy ? faLaughBeam : faAngry} 
                    color={props.fb.isHappy ? 'green' : 'red'} 
                    size='lg'
                />
            </div>
            <h5> {props.fb.head} </h5>
            <Txt.Text value={props.fb.content} />
        </div>
    )
}

export function News(props: {fb: ResponseItem}){
    return (
        <div className='w-auto p-2 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl'>
            <div className='absolute -top-2 -left-2 rounded-full bg-white'>
                <FontAwesomeIcon 
                    icon={props.fb.isHappy ? faLaughBeam : faAngry} 
                    color={props.fb.isHappy ? 'green' : 'red'} 
                    size='lg'
                />
            </div>
            <h5 className='text-left'> {props.fb.head} </h5>
            <Txt.Text value={props.fb.content} />
        </div>
    );
}

export function Meme(props: {fb: ResponseItem}){
    return (
        <div className='w-auto p-2 m-2 flex flex-col justify-center items-center relative bg-white rounded-xl'>
            <div className='absolute -top-2 -left-2 rounded-full bg-white'>
                <FontAwesomeIcon 
                    icon={props.fb.isHappy ? faLaughBeam : faAngry} 
                    color={props.fb.isHappy ? 'green' : 'red'} 
                    size='lg'
                />
            </div>
            <Txt.Text value={props.fb.head} />
            <img 
                src={props.fb.content}
                className='h-60 w-auto'
                alt='Meme reaction'
            />
        </div>
    );
}