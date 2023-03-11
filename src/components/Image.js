const Image = ({id, img, loadState, load, keys}) => {
    return (
        <>
            <img 
            alt=""
            src={`https://robohash.org/blteuwoqqqe${id}${img}`} 
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

