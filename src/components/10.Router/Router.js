import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function Router() {
    return (
        <>
            <h6>Menu</h6>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page-2">Page 2</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/" element={<Page1 />} />
                    <Route path="/page-2" element={<Page2 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router 