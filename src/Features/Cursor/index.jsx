/* -----> Styles <----- */
import './index.css';

/* -----> Component <----- */
const Cursor = () => {

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    });

    document.addEventListener('click', () => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

    // Return JSX
    return (
        <div className="cursor"></div>
    )
}

/* -----> Export <----- */
export default Cursor