import './Header.css';

const Header = ({title}) => {
    return (
        <header>
            <h1 className="title-style">{title}</h1>
            <h2 className="user-style">HalimaR</h2>
        </header>
    )
}
export default Header