import Button from "./Button";

const Header = ({ onAdd, showAddTask, text }) => {
    return (
        <header className="header">
            <h2
                style={{
                    color: "#0F3D3E",
                    fontFamily: "'Bree Serif', serif",
                    fontWeight: "bold",
                    fontSize: "50px",
                    textDecoration: "underline",
                    textShadow:'2px 2px #888888'
                }} 
            >
                Tasks
            </h2>
            <Button text={showAddTask ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    );
};

export default Header;
