import React from 'react'
import s from './Header.module.sass'
import {NavLink} from 'react-router-dom'



type PropsType = {

}

const Header: React.FC<PropsType> = React.memo( () => {
    return (
        <header className={`${s.header}`} >
            <NavLink to={'/'}>Index</NavLink>
            <NavLink to={'/item/1'}>Item 1</NavLink>
            <NavLink to={'/item/2'}>Item 2</NavLink>
            <NavLink to={'/item/3'}>Item 3</NavLink>
        </header>
    )
})



export default Header