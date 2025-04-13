import Content from "./Content";
import Filters from "./Filters";
import Footer from "./FooterCustom";
import Menu from "./Menu";

export default function AppLoad() {
  return (
    <>
      <div className="container">
        <div className="header">
            <Menu/>    
        </div>
        <div className="menu">
          <Filters/>
        </div>
        <div className="content">
            <Content/>
        </div>
        <Footer/>
      </div>
    </>
  );
}