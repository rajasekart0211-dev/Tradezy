import './Navbar.css'
import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("Shop")
    const [count, setCount] = useState(0)

    const scroll = () => { window.scrollTo(0, 0) }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={Logo} alt="" />
                <p>Tradezy</p>
            </div>
            <ul>
                <li onClick={() => {
                    setMenu("Shop")
                    scroll()

                }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                        Shop
                    </Link>
                    {menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => {
                    setMenu("Men")
                    scroll()
                }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/men'}>
                        Men
                    </Link>
                    {menu === "Men" ? <hr /> : <></>}
                </li>
                <li onClick={() => {
                    setMenu("Women")
                    scroll()
                }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/women'}>
                        Women
                    </Link>
                    {menu === "Women" ? <hr /> : <></>}
                </li>
                <li onClick={() => {
                    setMenu("Kids")
                    scroll()
                }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/kids'}>
                        Kids
                    </Link>
                    {menu === "Kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/Login'}> <button>Login</button> </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/cart'}><img src={Cart} alt="" /></Link>
                {count != 0 ? <div className="nav-cart-count">{count}</div> : <></>}
            </div>
        </div>
    )
}

export default Navbar