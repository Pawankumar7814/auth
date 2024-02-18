function Navbar(props) {
    return (
        <div className="App" >
        This is Navigation Bar's Component
            <h1>{props.list}</h1>
        </div>
    );
}

export default Navbar;