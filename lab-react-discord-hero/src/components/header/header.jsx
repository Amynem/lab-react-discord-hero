import "./header.css";

function Header(props) {
    const { img, link, menu } = props;

    return ( 
        <header>
            <div className="Header">
                <div className="Logo">
                    <a href={link}>
                        <img src={img} />
                    </a>
                </div>

                <div className="Hamburger">
                    <a href={link}>
                        <img src={menu}/>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;