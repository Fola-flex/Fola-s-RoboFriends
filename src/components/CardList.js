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
                            img={changeType}
                            load={load}
                            loadState={loadState}
                            keys={i}
                        />
                    )
                })
            }
        </>
    );
}

export default CardList