import "./Layout.css";
import Header from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <section className="main">{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;
