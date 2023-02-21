import './Boxs.css';
import Card from '../../Helpers/Card/Card';

//There are for icons
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineShop } from "react-icons/ai";

// This is for img map
import map from '../../assets/images/map.jpg'

function Boxs () {

    let info = [
        {
            id : 1,
            name : "مراجعه",
            addres : "شنبه تا پنجشنبه : 9:00 - 23:00",
            icons : <AiOutlineShop />
        },
        {
            id : 2,
            name : "ایمیل",
            addres : "ghalamstore97@gmail.com",
            icons : <TfiEmail />
        },
        {
            
            id : 3,
            name : "تلقن",
            addres : "045 3382 0186 / 0914 952 5880",
            icons : <BsTelephone />
        }
    ]

    const AllCards = info.map((card) => <Card key={card.id} icons={card.icons} name={card.name} addres={card.addres}/>)

    return (
        <div className='boxs'>
            <img src={map} />
            {AllCards}
        </div>
    )
}

export default Boxs