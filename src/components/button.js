import React from "react"

const Button = ({ children }) => {
    function animateButton(e) {
        e.preventDefault();
        let button = e.currentTarget;
        button.classList.remove('animate');
        button.classList.add('animate');
        setTimeout(function () {
            button.classList.remove('animate');
        }, 700);
    }
    return (
        <button className="button" onClick={animateButton}>
            {children}
        </button>
    )
}

export default Button;