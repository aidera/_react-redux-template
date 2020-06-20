import React from 'react'
import s from './Index.module.sass'



type PropsType = {

}

const Index: React.FC<PropsType> = React.memo( () => {

    return (
        <div className={s.indexPage}>
            <h1>Index page</h1>

        </div>
    )
})



export default Index