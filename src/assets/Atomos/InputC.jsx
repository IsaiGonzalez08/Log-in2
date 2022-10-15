function InputC({type,text,clase,val}){
    return(
        <>
        <input type={type} placeholder={text} className={clase} value={val}/>
        </>
    )
}

export default InputC;

