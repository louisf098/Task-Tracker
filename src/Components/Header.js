import Button from "./Button";

const Header = ({ onAdd }) => {
    return (
        <header className="header">
            <h2
                style={{
                    color: "#0F3D3E",
                    fontFamily: "'Bree Serif', serif",
                    fontWeight: "bold",
                    fontSize: "50px",
                    textDecoration: "underline",
                }}
            >
                Tasks
            </h2>
            <Button onClick={onAdd} />
        </header>
    );
};

export default Header;
