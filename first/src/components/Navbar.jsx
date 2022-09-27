import '../css/Navbar.css';

function Navbar() {

    return (
        <header className='Navbar'>
            <h1>Jitesh Kumar Verma</h1>
            <div>
                <button onClick={ () => alert('logged in') }>Login</button>
                <button>Sign up</button>
            </div>
        </header>
    );
}

export default Navbar;