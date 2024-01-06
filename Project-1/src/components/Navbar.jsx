export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img src="src/assets/Images/brand_logo.png" alt="logo" />
            </div>
            <ul className="ul-list">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className="btn">Login</button>
        </nav>
    )
}