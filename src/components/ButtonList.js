import Button from "./Button";

const ButtonList = ({ onClick }) => {
    return (
        <div className="button_list flex flex-wrap justify-center mw8">
            <Button id="robot" onClick={onClick} value={'Robots'}/>
            <Button id="monster" onClick={onClick} value={'Monsters'}/>
            <Button id="disembodied" onClick={onClick} value={'Disembodied'}/>
            <Button id="kittens" onClick={onClick} value={'Kittens'}/>
            <Button id="avatar" onClick={onClick} value={'Avatars'}/>
            <Button id="random" onClick={onClick} value={'Random'}/>
        </div>
    )
}

export default ButtonList