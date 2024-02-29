/* -----> Third party Packages <----- */
import { useRef, useEffect } from 'react';

/* -----> Styles <----- */
import './index.css';

/* -----> Component <----- */
const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveHandler = (e) => {
            cursor.style.top = e.pageY - 10 + 'px';
            cursor.style.left = e.pageX - 10 + 'px';
        };

        const clickHandler = () => {
            cursor.classList.add('expand');
            setTimeout(() => {
                cursor.classList.remove('expand');
            }, 500);
        };

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('click', clickHandler);

        return () => {
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('click', clickHandler);
        };
    }, []);

    return <div className="cursor" ref={cursorRef}></div>;
};

/* -----> Export <----- */
export default Cursor;
