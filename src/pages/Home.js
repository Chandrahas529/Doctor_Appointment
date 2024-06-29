import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import imgsrc from '../images/doc2r.png';
import imgsrc1 from '../images/doc-talk.jpg';
import imgsrcC1 from '../images/ambulance.png';
import imgsrcC2 from '../images/doctor.png';
import imgsrcC3 from '../images/stethoscope.png';
import imgsrcC4 from '../images/24-hours.png';
import tools1 from '../images/tools1.jpg';
import tools2 from '../images/tools2.jpg';
import tools3 from '../images/tools3.jpeg';
import tools4 from '../images/tools4.jpeg';
import logo from '../images/logo.png';
import './Home.css';
function Home(){
    const { setActive } = useOutletContext();
    return(
        <>
            <Section1 setActive={setActive} />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
            <Copyright />
        </>
    )
}
function Section1({ setActive }){
    return (
        <div className='sec1'>
            <div className="sect1-desc">
                <div className='sect1-title'>Welcome to CS Hospital</div>
                <h2>We are here for your Care</h2>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                <h2><Link to="/appointment"><button onClick={() => { setActive(3)}} className='appoint'>Make an appointment</button></Link></h2>
            </div>
            <div className='sect1-img'>
                <img src={imgsrc} className='doc1'/>
            </div>

        </div>
    )
}
function Section2(){
    return (
        <div className='sec2'>
            <div className='sec2-left'>
                <img src={imgsrc1} className='doc-talk'/>
            </div>
            <div className='sec2-right'>
                <h2>We Are <span className='tag'>CSians</span> A Medical Clinic</h2>
                <div>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            </div>
        </div>
    )
}
function Section3(){
    return(
        <div className="sec3">
            <h2>Our Services</h2>
            <div className='cards'>
                <Card />
            </div>
        </div>
    )
}
function Card(){
    const detailss = [
        {imgid:imgsrcC1,title:"Emergency Services",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."},
        {imgid:imgsrcC2,title:"Qualified Doctors",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."},
        {imgid:imgsrcC3,title:"Outdoors Checkup",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."},
        {imgid:imgsrcC4,title:"24 Hours Service",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."}
    ]
    const lists = detailss.map((detail)=>
        <div key={detail.title} className='card'>
            <div className='img-circle'><img src={detail.imgid}/></div>
            <h2 className='card-title'>{detail.title}</h2>
            <div className='card-desc'>{detail.description}</div>
        </div>
    );
    return (<>
        {lists}
    </>);
}

function Section4(){
    return <div className='sec4'>
        <h1>Your Health is Our Priority</h1>
        <div style={{padding:"10px"}}>We can manage your dream building A small river named Duden flows by their place</div>
    </div>
}

function Section5(){
    return <div className='sec5'>
        <div className='sec5-left'>
            <img className='tools1' src={tools1} />
            <div className='down-tools'>
                <img className='tools2' src={tools2}/>
                <img className='tools3' src={tools3}/>
            </div>
            <img className='tools1' src={tools4} />
        </div>
        <div className='sec5-right'>
            <Cardlist />
        </div>
    </div>
}
function Cardlist(){
    const lists = ["Neurology","Opthalmology","Nuclear Magnetic","Surgical","Cardiology","X-ray","Dental","Traumatology","Cardiology"];
    var i = 1;
    return lists.map(list => 
        <div key={list} className='cardlist'><i className="fa-solid fa-stethoscope icons"></i>
                <h2 className='cardlisttitle'>{list}</h2>
                <div className='carddesc'>Far far away, behind the word mountains</div>
        </div>
    )
}

function Footer(){
    return (<footer className='footer'>
        <div className='foot-left'>
            <div className='logo-big'>
                <img className='brand' src={logo}/>
                <div className='hospital'>CS Hospital</div>
            </div>
            <div>Our social media links</div>
            <div className='social-links'>
                <i className="fa-brands fa-x-twitter social"></i>
                <i className="fa-brands fa-facebook-f social"></i>
                <i className="fa-brands fa-instagram social"></i>
                <i className="fa-brands fa-whatsapp social"></i>
            </div>
        </div>
        <div className='foot-center'>
            <h2>Services</h2>
            <div>Emergency Services</div>
            <div>Qualified Doctors</div>
            <div>Outdoors Checkup</div>
            <div>24 Hours Services</div>
        </div>
        <div className='foot-right'>
            <div><i className="fa-solid fa-location-dot"></i><span>Krishak Nagar, Zora, Raipur (C.G.), India</span></div>
            <div><i className="fa-solid fa-phone"></i><span>+91 98261 98261</span></div>
            <div><i className="fa-solid fa-envelope"></i><span>info@cshospital.com</span></div>
        </div>
    </footer>)
}

function Copyright(){
    return (<div className='copyright'>
        Copyright ©2024 All rights reserved.
    </div>)
}

export default Home;