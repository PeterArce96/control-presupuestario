const Header = ({ company }) => {
    const { name, slogan } = company;
    return (
        <header className="header">
            <h2 className="header__name">{name}</h2>
            <h1 className="header__slogan">{slogan}</h1>
        </header>
    );
};

export default Header;

//parámetros que recibe un componente --> props