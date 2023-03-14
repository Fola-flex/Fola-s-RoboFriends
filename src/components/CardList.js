import Card from "./Card";


const CardList = ({ robots, changeType, load, loadState }) => {
    return (
        <>
            {
                robots.map((user, i) => {
                    return  (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                            imgType={changeType}
                            load={() => load(i)}
                            loadState={loadState.includes(i)}
                            keys={i}
                        />
                    )
                })
            }
        </>
    );
}

export default CardList