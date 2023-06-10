import SearchBar from "../searchbar/SearchBar";
import {Link} from "react-router-dom";
import style from "./navbar.module.css";

export default function Navbar({onSearch, random}) {
  return (
    <div className={style.navContainer}>
      
      <Link to="/about" ><button className={style.random}>About</button></Link>
      <Link to="/home"><button className={style.random}>Home</button></Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/favorites"><button className={style.random}>Favorites</button></Link>
      <button className={style.random} onClick={random}>Add Random</button>
      
    </div>
  );
}
