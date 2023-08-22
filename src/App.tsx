import React from 'react';
import Navigation from './Home/navigation/Navigation';
import Preview from './Home/preview/Preview';
import Episodes from './Home/episodes/Episodes';
import Newsletter from './Home/newsletter/Newsletter';
import About from './Home/about/About';
import Reviews from './Home/reviews/ReviewList';
import Footer from './Home/footer/Footer';

const App:React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navigation />
      <Preview />
      <Episodes />
      <About />
      <Newsletter />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App;
