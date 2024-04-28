import { useState, useEffect } from "react";
import style from '../css/WindowSize.module.css';

function WindowSize () {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const resize = () => setSize([window.innerWidth, window.innerHeight])
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    return(
        <div className={style.size}>
            <p>Ширина окна: {size[0]}</p>
            <p>Длина окна: {size[1]}</p>
        </div>
    )
}
export default WindowSize