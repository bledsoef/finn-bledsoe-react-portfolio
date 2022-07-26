import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfgAEAzoStOclYC6C40TPk0xJS1G9Nq4g",
  authDomain: "finn-bledsoe-react-portfolio.firebaseapp.com",
  projectId: "finn-bledsoe-react-portfolio",
  storageBucket: "finn-bledsoe-react-portfolio.appspot.com",
  messagingSenderId: "692099351817",
  appId: "1:692099351817:web:2d087eae19f6f7d83abfd8",
  measurementId: "G-QQ92PZBW8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
