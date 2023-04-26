import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
/* import TestimonialList from './components/Testimonials'; */
import CaseStudyList from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
/*   const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fservice%2Ftestimonial-page-examples&psig=AOvVaw1fHG8cniJnzTeQjD9LrVly&ust=1682253496383000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiP_OPAvf4CFQAAAAAdAAAAABAE'
    },
    {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fservice%2Ftestimonial-page-examples&psig=AOvVaw1fHG8cniJnzTeQjD9LrVly&ust=1682253496383000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiP_OPAvf4CFQAAAAAdAAAAABAE'
    },
    {
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Bob Johnson',
      image: 'https%3A%2F%2Fblog.hubspot.com%2Fservice%2Ftestimonial-page-examples&psig=AOvVaw1fHG8cniJnzTeQjD9LrVly&ust=1682253496383000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiP_OPAvf4CFQAAAAAdAAAAABAE'
    }
  ]; */

  const caseStudies = [
    {
      index: 1,
      org: 'Decentralized Finance Platform',
      category: 'Development',
      details: 'We designed and implemented a secure, high-performance DeFi platform that enables users to seamlessly trade, lend, and borrow digital assets. Our smart contract expertise ensured the platform\'s stability and scalability, while our security audit minimized vulnerabilities.'
    },
    {
      index: 2,
      org: 'Supply Chain Management Solution',
      category: 'Solutions',
      details: 'We developed a transparent and tamper-proof supply chain management system using blockchain technology for a leading logistics company. Our Web3 solution streamlined the tracking and verification of goods, reducing costs and improving efficiency for all stakeholders.'
    },
    {
      index: 3,
      org: 'NFT Marketplace',
      category: 'Development',
      details: 'We created an NFT marketplace that connects creators and collectors, allowing for the seamless trading of digital art and collectibles. Our smart contract and Web3 solutions enabled secure transactions and a user-friendly platform, driving the growth of the digital art ecosystem'
    }    
  ];  

  return (
    <div className="App margin-auto">
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <TestimonialList testimonials={testimonials}/> */}
      <CaseStudyList casestudies={caseStudies} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
