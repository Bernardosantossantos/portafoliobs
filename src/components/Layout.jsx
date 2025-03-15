import Navbar from './navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar className="" />
      <main className="">
        {children}
      </main>
      <Footer className=""/>
    </>
  );
}

export default Layout;
