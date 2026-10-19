import Banner from './components/banner/banner.jsx';
import Care from './components/care/care.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/hero.jsx';
import Places from './components/places/places.jsx';
import Products from './components/products/products.jsx';
import Review from './components/review/review.jsx';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banner />
        <Products />
        <Places />
        <Care />
        <Review />
      </main>
      <Footer />
    </>
  );
}
