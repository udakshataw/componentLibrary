import React from "react";
import "./Button.css";

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const Button = ({
    primary = true,
    backgroundColor,
    size = "medium",
    onClick,
    label,
}: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <button type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
        style={backgroundColor ? { backgroundColor } : {}} onClick={onClick}>
            { label }
        </button>
    )
};

export default Button;