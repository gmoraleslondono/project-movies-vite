import { NavLink } from "react-router-dom";
import "../css/NavigationBar.css";

export const NavigationBar = () => {
  return (
    <ul className="navigation-bar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>
  );
};
