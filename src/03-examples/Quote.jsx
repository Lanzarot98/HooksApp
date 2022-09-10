import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({author, quote}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0}) // tamaño original de la caja

    useLayoutEffect(() => {
      // aquí puedo sacar el tamaño del contenedor
        const {height, width} = pRef.current.getBoundingClientRect()
        setBoxSize({ height, width })
    }, [quote]) // podemos dejar esa dependencia en vació o con quote y esto podría dispararse cada vez que el quote cambie, aunque en el Loading esto se destruye y no es tan necesario

    return (
        <>

            <blockquote 
                className="blockquote text-end"
                style={{display: 'flex'}}
            >
                <p ref={ pRef } className="mb-1">{ quote }</p>
                <footer className="blockquote-footer mt-1">{ author }</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}