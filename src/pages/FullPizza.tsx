import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = React.useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()
    const {id} = useParams()
    const navigate = useNavigate()


    React.useEffect(() => {
        const fetchPizza = async () => {
            try {
                const {data} = await axios.get('https://6352e6c7a9f3f34c374b4459.mockapi.io/Items/' + id)
                setPizza(data)
            } catch (err) {
                navigate('/')
                console.log(err)
            }
        }

        fetchPizza()
    }, [])

    if (!pizza) {
        return <>Загрузка...</>
    }

    return (
        <div className='container'>
            <img src={pizza.imageUrl}/>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} p</h4>
            <Link to='/notqweqwe'>
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </div>
    )
}

export default FullPizza