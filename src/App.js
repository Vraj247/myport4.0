import './App.scss';
import profile from './images/Profile.png'
import dribbble from './images/dribbble.svg'
import linkedin from './images/linkedin.svg'
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import instagram from './images/instagram.svg'
import behance from './images/behance.svg'
import One from './images/1.png'
import Two from './images/2.png'
import postpaid from './images/postpaid-cover.png'
import prj1 from './images/travel.png'
import prj2 from './images/postpaid.png'
import prj3 from './images/trains.png'
import prj4 from './images/credit.png'





function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
              <div className="nav-left">
                    <img src={profile} alt="my profile pic"></img>
              </div>
              <div className="nav-center">
              </div>

              <div className="nav-right">
                <a href ="https://dribbble.com/Vraj247" target="_blank" rel="noopener noreferrer"><img src={dribbble} alt="dribbble"></img></a>
                <a href ="https://www.linkedin.com/in/vraj247/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin"></img></a>
                <a href ="https://twitter.com/Vraj247" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter"></img></a>
                <a href ="https://github.com/vraj247/" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"></img></a>
                <a href ="https://www.instagram.com/vraj247/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram"></img></a>
                <a href ="https://www.behance.net/vraj247" target="_blank" rel="noopener noreferrer"><img src={behance} alt="behance"></img></a>
              </div>

        </div>
        <div className="hero">
                <h1>Digital</h1> 
                <a>Experience</a> 
                <h1>Designer</h1>
                <div className="subtext">
                <h2> I am a Product designer over 5 years of experience. I am currently as User Expereince Design Manager at HDFC Bank ↗. Previously at Paytm, Grappus.
                </h2>
                </div>
        </div>


     

        <div className="hero-project">
            <div className="hero-main">
                  <div className="inside">
                    <img src={One} alt="Paytm Official Design System"></img>
                    <h1 href="">Paytm Travel</h1>
                    <p>Got a chance to work with some of the most interesting projects while I was working with Paytm's Travel Team. Here you would be able to see my work within travel ecosystem of Paytm.</p>
                    <a href="https://thehardcopy.co/under-paytms-design-hood/" target="_blank"></a>
                  </div>

                  <div className="inside">
                    <img src={Two} alt="Paytm Postpaid"></img>
                    <h1 >Paytm Postpaid 4.0</h1>
                    <p>Paytm's own Buy now Pay Later product. I've redesigned the product from scratch </p>
                    <a href="https://paytm.com/offer/paytm-postpaid" target="_blank"></a>
                  </div>
                </div>

            
            <div className="hero-title">
                  <h1>Work</h1>
                  <h2>View more</h2>
            </div>
        </div>



        {/* <div className="th-prj">
            <div className="in-prj">
            <img src={prj1} alt="Paytm Travel Homepage Redesigns"></img>
            <div className="in-prj-text">
              <h1>Paytm Travel</h1>
              <h2>Product Design</h2>
            </div>
            </div>

            <div className="in-prj">
            <img src={prj2} alt="Paytm Postpaid UX Redesign"></img>
            <div className="in-prj-text">
              <h1>Paytm Postpaid</h1>
            </div>
            </div>

            <div className="in-prj">
            <img src={prj3} alt="Paytm Trains New homepage redesign"></img>
            <div className="in-prj-text">
              <h1>Paytm Trains</h1>
            </div>
            </div>

            <div className="in-prj">
            <img src={prj4} alt="Paytm Travel Homepage Redesigns"></img>
            <div className="in-prj-text">
              <h1>Paytm Credit Score</h1>
            </div>
            </div>

        </div> */}

        <div className="footer">
          <h1>Designed and Developed ❤ Vikas Raj Yadav</h1>
          <h1>Last updated: 19th Oct 2021</h1>
        </div>

      </div> 
    </div>
  );
}

export default App;
