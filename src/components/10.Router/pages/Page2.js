import { useNavigate } from 'react-router-dom'

function Page2() {

    const navigate = useNavigate()
    
    return (
        <div>
            <p>This is page 2 (with redirect)</p>
            <button onClick={() => navigate('/')}>Redirect to page 1</button>
        </div>
    )
}

export default Page2