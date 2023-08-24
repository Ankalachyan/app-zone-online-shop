function Button({text,color="dark",evt}) {
    
    return <button  onClick = {evt} className={`btn btn-outline-${color}`}>
            {text}
        </button>
}

export default Button;


