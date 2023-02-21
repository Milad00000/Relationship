

function Card (props) {
    return (
        <div>
            {/* <BsTelephone /> */}
            <i>{props.icons}</i>
            <h4>{props.name}</h4>
            <p>{props.addres}</p>
        </div>
    )
}

export default Card