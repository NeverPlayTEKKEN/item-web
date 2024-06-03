const Button = (props) => {
    return (
        <button style={props.styles} onClick={props.buttonClick}>
            {props.text}
        </button>
    )
}

export default Button