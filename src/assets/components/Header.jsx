import Logo from '../Atomos/Logo'
import Nav from '../Atomos/Nav'
import '../style/header.css'

function Header(){
    return(
        <>
        <header className="container2">
        <Logo></Logo>
        <Nav></Nav>
        </header>
        </>
    )
}

export default Header;