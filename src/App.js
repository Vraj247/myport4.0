import './App.scss';
import profile from './images/Profile.png'
import dribbble from './images/dribbble.svg'
import linkedin from './images/linkedin.svg'
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import instagram from './images/instagram.svg'
import behance from './images/behance.svg'
import One from './images/travel.gif'
import Two from './images/2.png'
import featured from './images/thehardcopy.png'






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
                <h2>Experience</h2> 
                <h1>Designer</h1>
                <div className="subtext">
                <h3> I am a Product designer with over 5+ years of experience. I am currently as User Expereince Design Manager at HDFC Bank. Previously at Paytm.
                </h3>
                </div>
        </div>


     

        <div className="work">
            <div className="col-2">

                    {/* <div className="inside">
                        <img src={Two} alt="Paytm Postpaid"></img>
                        <h1 >Paytm Postpaid - The Buy now Pay Later</h1>
                        <p>Led the product design for the buy now pay later product. Was able to able to aquire 4X active users within 8 months of period.</p>
                        <a href="https://paytm.com/offer/paytm-postpaid" target="_blank">Website Link</a>
                    </div> */}

                    <div className="col-2-inside">
                      <p>Paytm Travel</p>
                      <h1>Homepage Redesign</h1>
                      <img src={One} alt="Paytm Official Design System"></img>
                    </div>

                    <div className="col-2-inside">
                      <p>Paytm postpaid</p>
                      <h1>Product Redesign</h1>
                      <img src={Two} alt="Paytm Official Design System"></img>
                    </div>
            </div>

            
            <div className="hero-title">
                  <h1>Work</h1>
            </div>

            <div className="col-1">
                  <div className="col-1-inside">
                    <h1>Paytm Official Design System</h1>
                    <p>I've got to chance to create and introduce design systems for Paytm. I won't be able to share the files here due to NDA.</p>
                    <a href="https://thehardcopy.co/under-paytms-design-hood/" target="_blank">Read here</a>
                  </div>
                  <div className ="col-1-img">
                    <img src={featured} alt="my profile pic"></img> 
                  </div>
            </div>

        </div>



        {/* <div className="th-prj">
            <div className="in-prj">
            <img src={One} alt="Paytm Travel Homepage Redesigns"></img>
            <div className="in-prj-text">
              <h1>Paytm Travel</h1>
              <h2>Product Design</h2>
            </div>
            </div>

            <div className="in-prj">
            <img src={One} alt="Paytm Postpaid UX Redesign"></img>
            <div className="in-prj-text">
              <h1>Paytm Postpaid</h1>
            </div>
            </div>

            <div className="in-prj">
            <img src={Two} alt="Paytm Trains New homepage redesign"></img>
            <div className="in-prj-text">
              <h1>Paytm Trains</h1>
            </div>
            </div>

            <div className="in-prj">
            <img src={Two} alt="Paytm Travel Homepage Redesigns"></img>
            <div className="in-prj-text">
              <h1>Paytm Credit Score</h1>
            </div>
            </div>

        </div> */}

        <div className="footer">
          <h1>Tailor: Vikas Raj Yadav</h1>
          <h1>Last updated: 9th Nov 2021</h1>
        </div>

      </div> 
    </div>
  );
}

export default App;
