import logo from './logo.svg';
import './App.css';
import NavBarHeader2 from './ui-components/NavBarHeader2';
import HeroLayout1 from './ui-components/HeroLayout1';
import MarketingPricing from './ui-components/MarketingPricing';
import Features2x2 from './ui-components/Features2x2';
import CTASection from './ui-components/CTASection';
import MarketingFooter from './ui-components/MarketingFooter';


function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        width: '1440px',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <NavBarHeader2 />
        <HeroLayout1 />
        <MarketingPricing />
        <Features2x2 />
        <CTASection />
        <MarketingFooter />
      </div>
    </div>
  );
}

export default App;
