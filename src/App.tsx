import "./styles.css";
import "./media.css";
import "./fonts/fonts.css";
import { Header } from "./HeaderComponents/Header";
import { HeaderLogo } from "./HeaderComponents/HeaderLogo";
import { HeaderSell } from "./HeaderComponents/HeaderSell";
import { HeaderNavbar } from "./HeaderComponents/HeaderNavbar";
import { NavLink } from "./HeaderComponents/NavLink";
import { Support } from "./HeaderComponents/Support";
import { SupportSell } from "./HeaderComponents/SupportSell";
import { HeaderIconComplex } from "./HeaderComponents/HeaderIconComplex";
import { HeaderIconSimple } from "./HeaderComponents/HeaderIconSimple";
import { OfferScreen } from "./OfferComponents/OfferScreen";
import { Offer } from "./OfferComponents/Offer";
import { OfferTitle } from "./OfferComponents/OfferTitle";
import { OfferMark } from "./OfferComponents/OfferMark";
import { OfferTutor } from "./OfferComponents/OfferTutor";
import { Clickable } from "./AppComponents/Clickable";
import logo from "./imgs/logo.svg";
import currency from "./imgs/rect.svg";
import fox from "./imgs/fox.svg";
import flag from "./imgs/flag.svg";
import labelimg from "./imgs/labelimg.svg";
import question from "./imgs/question.svg";
import parimg from "./imgs/copy.svg";

export default function App() {
  return (
    <div className="App">
      <Header>
        <HeaderSell>
          <HeaderLogo url={logo} alt="logo" />
          <HeaderNavbar>
            <NavLink pageUrl="#" text="otc desk" variant="regular" />
            <NavLink pageUrl="#" text="my dashboard" variant="dotted" />
            <NavLink pageUrl="#" text="create offer" variant="hot" />
          </HeaderNavbar>
        </HeaderSell>
        <HeaderSell>
          <Support>
            <SupportSell variant="menu" text="Community" />
            <SupportSell variant="regular" text="How it works" />
          </Support>
          <HeaderIconComplex
            first_img={fox}
            sec_img={currency}
            balance="9.645ETH"
            course="12312"
          />
          <HeaderIconSimple img={fox} handleMouseDown={() => alert("!")} />
          <HeaderIconSimple img={flag} />
        </HeaderSell>
      </Header>
      <OfferScreen>
        <Offer path="file > file" time="12.12.2002" num={128822} img={parimg}>
          <OfferTitle img={labelimg} text="Create bid" />
          <OfferMark text="part sell offer" />
          <OfferTutor text="How to use?" img={question} />
        </Offer>
      </OfferScreen>
    </div>
  );
}
