import Navbar from './navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar className="container mx-auto" />
      <main className="">
        {children}
      </main>
      <Footer className="container mx-auto"/>
    </>
  );
}

export default Layout;
