const Button = ({ value, id, onClick}) => {
    return (
        <>
            <button 
            className="hover-white hover-bg-black grow-large button tc ma2 pa3 bg-light-blue br3"
            id={id}
            onClick={onClick}>{value}
            </button>
        </>
    )
}

export default Button