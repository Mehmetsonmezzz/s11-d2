import "./Header.css";

function Header() {
  return (
    <div className="mainHeaderContainer">
      <div className="logoContainer">
        <h1>FRIENDS DATABASE</h1>
      </div>
      <div className="navContainer">
        <button className="navContainerItem">LOGIN.</button>
        <button className="navContainerItem">FRIENDSLIST.</button>
        <button className="navContainerItem">ADDFRIEND.</button>
        <button className="navContainerItem">LOGOUT</button>
      </div>
    </div>
  );
}

export default Header;
