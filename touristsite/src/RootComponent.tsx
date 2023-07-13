import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Gallery from './pages/Gallery'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import './styles/hex.css'
import './styles/animate.min.css'
import './styles/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login'
import Admin from './pages/admin'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.GALLERY_ROUTE} element={<Gallery />} />
                <Route path={ROUTES.LOGIN_ROUTE} element={<Login />} />
                <Route path={ROUTES.ADMIN_ROUTE} element={<Admin />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
