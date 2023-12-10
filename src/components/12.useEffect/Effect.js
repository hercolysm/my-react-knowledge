import { useState, useEffect } from 'react'

function Effect() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h3>Fetch + useEffect</h3>
            <h4>Return:</h4>
            <select>
                {products.map((product) => (
                    <option key={product.id} value={product.id}>{ product.title }</option>
                ))}
            </select>
        </div>
    )
}

export default Effect