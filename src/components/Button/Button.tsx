import React from "react";

interface ButtonPrompts {
    label: string;
}

const Button = (props: ButtonPrompts) => {
    return <button>{props.label}</button>;
};

export default Button;