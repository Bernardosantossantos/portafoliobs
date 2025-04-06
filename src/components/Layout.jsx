import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar className />
      <main className>
        {children}
      </main>
      <Footer className/>
    </>
  );
}

export default Layout;
