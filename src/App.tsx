import "./styles.css";
import { Header } from "./Header";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderSell } from "./HeaderSell";
import logo from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <Header>
        <HeaderSell>
          <HeaderLogo url={logo} alt="logo" />
        </HeaderSell>
      </Header>
    </div>
  );
}
