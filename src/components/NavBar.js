import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import { ThemeButton, NavLinkStyled, Logo, NavStyled } from "../styles";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <img
              src={props.currentTheme === "light" ? lightLogo : darkLogo}
              width="100"
            />
          </Logo>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <ThemeButton onClick={props.toggleTheme} className="nav-item">
              {props.currentTheme === "light" ? "Dark" : "Light"} mode
            </ThemeButton>
            <NavLinkStyled to="/cookies" className="nav-item">
              Cookies
            </NavLinkStyled>
          </ul>
        </div>
      </div>
    </NavStyled>
  );

  //   return (
  //     <div>
  //       <Logo to="/">
  //         <img
  //           src={props.currentTheme === "light" ? lightLogo : darkLogo}
  //           width="100"
  //         />
  //       </Logo>
  //       <NavLinkStyled to="/cookies">Cookies</NavLinkStyled>
  //       <ThemeButton onClick={props.toggleTheme}>
  //         {props.currentTheme === "light" ? "Dark" : "Light"} mode
  //       </ThemeButton>
  //     </div>
  //   );
};

export default NavBar;
