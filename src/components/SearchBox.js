const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input 
            className="pa3 ma2 ba b--black bg-lightest-blue"
            type='search' 
            placeholder='Search Robots' 
            onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;