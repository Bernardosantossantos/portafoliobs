import Navbar from './navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar className="" />
      <main className="w-screen min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
