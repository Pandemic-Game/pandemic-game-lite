import * as Txt from '../components/text';

export function OR(props: {col: string}){
    return (
        <div className='w-full flex flex-row justify-center items-center'>
            <hr className={`w-full border-${props.col} border-t-2`}/> 
                <h1 className={`my-1 mx-3 flex ${Txt.textSize('xl')} text-center text-${props.col} font-custom`}> OR </h1>
            <hr className={`w-full border-${props.col} border-t-2`}/>
        </div>
    )
}

export function Hr(props: {my: number, col: string}){
    return (
        <hr className={`m-2 my-${props.my} w-full border-${props.col} border-t-2`}/> 
    )
}