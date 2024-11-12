import "./button.css";

function Button(props) {
    const type = props.type;
    const text = props.text;

    return( 
    <button className={`Button ${type}`}>
     {text} 
    </button>);
}

export default Button;