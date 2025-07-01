type InputProps = {
    title?: string;
    placeHolder?: string;
}

export const Input: React.FC<InputProps> = ({ title, placeHolder }) => {
    return (
        <div>
            {title && <p>{title}</p>}
            <input placeholder={placeHolder} style={{ border: "1px solid #000", backgroundColor: "#333", padding: "1rem" }} />
        </div>
    )
}