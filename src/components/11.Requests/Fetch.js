function Fetch() {

    fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))

    return (
        <div>
            <h3>Fetch data with GET</h3>
        </div>
    )
}

export default Fetch