import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </section>
  );
};

export default Layout;
