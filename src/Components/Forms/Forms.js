import './Forms.css'

import Input from "../../Helpers/Input/Input"
import Title from "../../Helpers/Title/Title"


function Forms () {
    const handelChang = (event) => {
        event.preventDefault()
    }

    let data = [
        {
            id : 1,
            value : "نام",
        },
        {
            id : 2,
            value : "ایمیل",
        },
        {
            id : 3,
            value : "وب سایت",
        }
    ]

    const AllInput = data.map((v) => <Input key={v.id} value={v.value} />)

    return (
        <div className='forms'>
            <Title />
            <form onSubmit={handelChang} >
                {AllInput}
                <textarea placeholder='متن' />
                <div className='submit'>
                    <input type="submit" value="ارسال" />
                </div> 
            </form>
            
        </div>
    )
}

export default Forms