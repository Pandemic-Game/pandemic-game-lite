
export function OR(){
    return (
        <div className='w-full flex flex-row justify-center items-center'>
            <hr className='w-full border-black border-t-2'/> 
                <h1 className={`my-1 mx-3 flex text-xl text-center font-custom`}> OR </h1>
            <hr className='w-full border-black border-t-2'/>
        </div>
    )
}

export function Hr(props){
    return (
        <hr className={`m-2 my-${props.my} w-full border-${props.col} border-t-2`}/> 
    )
}