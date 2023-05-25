import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import TestimonialList from './components/Testimonials';
import CaseStudyList from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const testimonials = [
    {
      text: "Dark Shadowy Super Coders provided exceptional smart contract development for our DeFi project, ensuring top-notch security and functionality. Their expertise was invaluable to our success.",
      author: "Dr. Justin Goldston",
      image: "https://justingoldston.com/assets/images/djg.jpg"
    },
    {
      text: "Their Web3 solutions transformed our business operations, creating a transparent and efficient platform that gained the trust of our users. The team's professionalism and dedication were unmatched.",
      author: "Nick Sibley",
      image: "https://user-images.githubusercontent.com/6126851/240930519-0068b424-21f4-41ae-a940-7299dfef8a26.png"
    },
    {
      text: "We engaged Dark Shadowy Super Coders for a security audit, and their meticulous approach helped us identify and mitigate vulnerabilities. Their insights have been crucial to maintaining our platform's integrity.",
      author: "Daniel Gouldman",
      image: "https://uploads-ssl.webflow.com/61e9746ea8f6561faddc28a8/627096904c5b5cafdb56770c_Daniel%20Gouldman.jpeg"
    }
  ];

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
        <TestimonialList testimonials={testimonials}/>
        <CaseStudyList casestudies={caseStudies} />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
