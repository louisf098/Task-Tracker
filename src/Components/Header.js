import Button from "./Button";

const Header = () => {
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
            <Button />
        </header>
    );
};

export default Header;
