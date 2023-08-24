
function Inp({typ,flag,text,id,change,valid}) {


    const changeN = (evt) =>{
        change(evt.target.value)
    }
    return(
    <>
    {
       !flag && <label htmlFor={id}>{text}</label>
    }
    <input 
    className={`form-control ${valid ? "is-valid" : "is-invalid"}`}
    id={id} type={typ} 
    placeholder = {flag && text}
    onChange={changeN}
    />
    </>
    )
}
export default Inp;