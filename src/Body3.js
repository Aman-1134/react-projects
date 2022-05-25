import Dalmoth from './Dalmoth.jpg';

import HTML from './HTML.png';
import CSS from './CSS.png';
import Js from './JS.png';
import React from './react.jpg';
import Sass from './sass.png';
import php from './php.png';

import a1 from './a1.png';
import a2 from './a2.png';
import a3 from './a3.png';

import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';

const Body3 = () => {
    return (
        <div className="body-3">
            <div className="abc">
                <div className="new-project">
                    <img className= "dalmoth" src={ Dalmoth } alt="Dalmoth" height={300} width={400}></img>
                </div>

                <div className="new-project">
                    <p><b>---Our Recent <span>Project</span></b></p>
                    <h1 className='project'>Danira's <span>Dalmoth<br></br>Company</span></h1>
                    <p>Danira's is a brand of "Pushpanjali Spices and Food Products" is a premium manufacturer and<br></br>
                    supplier of the innovative quality food products at competitive rate. Danira's is a product which<br></br>
                    has been launched in most of the places in Nepal. It is a prodict with perfect mixture of spices<br></br>
                    and namkeens.
                    </p>

                    <button class="new-b">View More Portfolio</button>
                </div>
            </div>
        
        <div className='p2'>
            <p><b>Our <span>Customers</span></b></p>
            <h1 className='abcd'>Our <span>Clients</span> Love Our Work</h1>
            <p>But dont just take our work for it...</p>
        </div>

        <div className='im'>
            <img className='imag' src={ a1 } height={150} width={150}></img>
            <img className='imag' src={ a2 } height={150} width={150}></img>
            <img className='imag' src={ a3 } height={150} width={150}></img>
            <img className='imag' src={ a2 } height={150} width={150}></img>
        </div>

        <div className='Trust'>
            <p>Our Testimonials</p>
            <h1>What our <span>Trustworthy</span> client say</h1>

            <div className='ap'>
                <div className='a1'>
                    <div className='a2'>
                        <img src={p1} alt="picture-p1" height={200} width={200}></img>

                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typesetting industry.<br></br>
                        Lorem Ipsum has been the industry's<br></br>
                        standard dummy text ever since the 1500s</p>
                    </div>

                    <div className='a2'>
                        <img src={p2} alt="picture-p2" height={200} width={200}></img>

                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typesetting industry.<br></br>
                        Lorem Ipsum has been the industry's<br></br>
                        standard dummy text ever since the 1500s</p>
                    </div>

                    <div className='a2'>
                        <img src={p3} alt="picture-p3" height={200} width={200}></img>

                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typesetting industry.<br></br>
                        Lorem Ipsum has been the industry's<br></br>
                        standard dummy text ever since the 1500s</p>
                    </div>

                    <div className='a2'>
                        <img src={p4} alt="picture-p4" height={200} width={200}></img>

                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typesetting industry.<br></br>
                        Lorem Ipsum has been the industry's<br></br>
                        standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='tech'>
            <div>
                <h1 className='techh1'>Tools and <span>Technologies</span><br></br> That We Use</h1>
                <p className='techp'><b>We Make it Happen</b></p>
                <p>101 Infotech utilizes high-quality technical tools such as<br></br>
                WordPress, Laravel, CSS, JavaScript, HTML, My SQL etc. in<br></br>
                order to provide you better business solutions.
                </p>
            </div>

            <div className='lines'>
                <div className='line1'>
                    <img className='imag' src={ HTML } height={100} width={100}></img>
                    <img className='imag' src={ CSS } height={100} width={100}></img>
                    <img className='imag' src={ Js } height={100} width={100}></img>
                </div>

                <div className='line1'>
                    <img className='imag' src={ React } height={100} width={100}></img>
                    <img className='imag' src={ Sass } height={100} width={100}></img>
                    <img className='imag' src={ php } height={100} width={100}></img>
                </div>
            </div>
        </div>

        <div className='login'>
            <div className="des">
                <p className="connect"><b>Connect with Us</b></p>
                <h1>Make your <span>dream<br></br>projects</span> on the<br></br>best possible way</h1>
                <p>Mean if he they been no hold mr. ls at much do made. Latter person am secure of<br></br>
                estate genius of</p>
            </div>

            <div className='form'>
                <form action="#">
                    <label for="fname"></label><br></br>
                    <input type="text" id="fname" name="fname" placeholder="Email"></input><br></br>
                    <label for="lname"></label><br></br>
                    <input className="pass" type="text" id="lname" name="lname" placeholder="Password"></input><br></br>
                    <div className="inside">
                        <input type="submit" value="Get Started"></input>
                    </div>
                </form>

            </div>
        </div>

        <div className="newsletter">
            <div className="news">
                <div className="news1">
                    <h2 className='white'>Join Our Newsletter</h2>
                    <p className='white'>Sign Up to stay updated with the latest insights,<br></br>news and more.</p>
                </div>

                <div className="news1">
                <form action="#">
                    <div className="subscribe">
                        <input className="email" type="text" id="lname" name="lname" placeholder="Your Email Address"></input><br></br>
                        <input type="submit" value="Subscribe"></input>
                    </div>
                </form>
                </div>
            </div>

            <div className="list">
                    <ul className="end">
                        <li><a href="#">Company</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">What We Do</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <ul className="end">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">Graphic Designing</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">SEO Optimization</a></li>
                    </ul>

                    <ul className="end">
                        <li><a href="#">Join</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Internships</a></li>
                    </ul>

                    <ul className="end">
                        <li><a href="#">Connects With Us</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ul>
            </div>
        </div>

        </div>
     );
}
 
export default Body3;