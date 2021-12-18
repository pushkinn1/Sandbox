import "./styles.css";
import "./fonts/fonts.css";
import { Header } from "./Header";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderSell } from "./HeaderSell";
import { HeaderNavbar } from "./HeaderNavbar";
import { NavLink } from "./NavLink";
import logo from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <Header>
        <HeaderSell>
          <HeaderLogo url={logo} alt="logo" />
          <HeaderNavbar>
            <NavLink text="my dashboard" variant="hot" />
            <NavLink text="hello" variant="regular" />
          </HeaderNavbar>
        </HeaderSell>
      </Header>
    </div>
  );
}
