import navLogo from '../../public/images/logo (1).png'
import searchImg from '../../public/images/search.svg'
import menu from '../../public/images/menu.svg'
import like from '../../public/images/like.svg'
import box from '../../public/images/box.svg'
import cart from '../../public/images/cart.svg'
import avatar from '../../public/images/avatar.svg'

import '../index.css'
import Signin from './Signin'

export default function Header({user, modal, setModal}) {
  return (
    <header>
        <nav className="header__nav container">
            <img src={navLogo} alt="image" />
            <button className='katalog'>
                <img src={menu} alt="" />
                Каталог
            </button>
            <div className='search-box'>
                <input type="text" placeholder='Найти товар' />
                <button>
                    <img src={searchImg} alt="image" />
                </button>
            </div>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <img src={like} alt="" /><br />
                    Избранное
                </li>
                <li className='nav__list-item'>
                    <img src={box} alt="" /><br />
                    Заказы
                </li>
                <li className='nav__list-item'>
                    <img src={cart} alt="" /><br />
                    Корзина
                </li>
            </ul>
            <div className='users' onClick={() => setModal(!modal)}>
                <img src={avatar} alt="" />
                Алексей
                {/* {!user.name ? 'Sign in' : user.name} */}
            </div>
        </nav>
    </header>
  )
}
