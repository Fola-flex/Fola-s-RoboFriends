import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import ButtonList from '../components/ButtonList'
import Scroll from '../components/Scroll';
import './App.css';

const App = (props) => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [robot_type, setRobotType] = useState("?200x200")
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => setRobots(users))
    })

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
    
    const changeSrcUrl = (e) => {
        e.target.id === "robot" ? setRobotType("?200x200") 
            : e.target.id === "kittens" ? setRobotType("?set=set4") 
            : e.target.id === "monster" ? setRobotType("?set=set2")
            : e.target.id === "avatar" ? setRobotType("?set=set5")  
            : setRobotType("?set=set3")    
        }

    const onImageLoaded = () => {
      setLoaded(true)
    };

    const resetImgState = () => {
      setLoaded(false)  
    }

    const type = robot_type;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
        (
            <div className="flex center">
                <h1 className="tc">Loading</h1>
                <div className="animation-container tc">
                    <div className="animation"></div> 
                    <div className="animation"></div> 
                    <div className="animation"></div>
                </div> 
            </div>
        ) :
        (
            <div className="tc">
                <h1 className="f1">Fola's RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <ButtonList  onClick={(e) => {
                    resetImgState()
                    changeSrcUrl(e)
                }}/>
                <Scroll>
                    <CardList loadState={loaded} load={onImageLoaded} changeType={type} robots={filteredRobots} />
                </Scroll>
            </div>
        );
   
}

export default App