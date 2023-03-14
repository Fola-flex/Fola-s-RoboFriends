const Image = ({id, imgType, loadState, load, keys}) => {
    return (
        <>
            <img 
            alt=""
            src={`https://robohash.org/plop${id}${imgType}`} 
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

