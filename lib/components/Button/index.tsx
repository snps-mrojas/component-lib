import { useState } from "react";

type ButtonProps = {
    title: string
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
    const [count, setCount] = useState(0);

    return (
        <div role="button" style={{ backgroundColor: "#666", padding: "1rem" }} onClick={() => setCount(count + 1)}>
            {title} - {count}
        </div>
    )
}