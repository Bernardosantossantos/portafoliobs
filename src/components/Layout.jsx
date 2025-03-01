import Navbar from './navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
    <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    {`
      body {
        font-family: 'poppins' sans-serif;
      }
    `}
  </style>
</>
      <Navbar className="" />
      <main className="w-screen h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
