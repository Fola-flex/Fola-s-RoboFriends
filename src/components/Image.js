const Image = ({id, imgType, loadState, load}) => {
    return (
        <>
            <img 
            alt=""
            src={`https://robohash.org/plops${id}${imgType}`} 
            onLoad={load}
            id={id}
            />
            { !loadState && <div className="bg-light-blue container-overlay">
                <div className="tc" id="loading"></div>
            </div>} 
        </>
    )
}

export default Image;

