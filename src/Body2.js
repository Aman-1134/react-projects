import { GoCheck, GoDeviceDesktop, GoDesktopDownload, GoGraph, GoPencil, GoFileDirectory, GoDeviceMobile } from "react-icons/go";
import { IconContext } from "react-icons";

const Body2 = () => {
    return (
        <div className="body2">
            <div className="intro">
                <h1><span>Movement</span> For<br></br>Brand <span>Digitization</span></h1>

                <p>101 INFOTECH is an extension of your organization. You aren't just another client.<br></br> 
                    You are a partner, and you deserve an experience that is comfortable and tailored to your<br></br>
                    needs. We are the team and you deserve. We don't claim to be the best in Nepal or Kathmandu<br></br>
                    but we do our best and deliver what you need.
                </p>
            </div>

            <IconContext.Provider value={{color:'rgb(36, 36, 169)', size:'3em'}}>
            <div className="features">
                <div className="part1">
                    <div className="part2">
                        <h3>A Timeline You Set</h3>
                        <p>Stop feeling stuck. We only use month-to-month contracts</p>
                    </div>

                    <div className="part2">
                        <h3>A Team You Know and Trust</h3>
                        <p>Collaborate with our in-house team. We don't outsource.</p>
                    </div>
                </div>

                <div className="part1">
                    <div className="part2">
                        <h3>A Price That Fits You</h3>
                        <p>Hit goals with a customized strategy you can afford.</p>
                    </div>

                    <div className="part2">
                        <h3>A TimA Holistic Transformation of<br></br>Your Businessline You Set</h3>
                        <p>Enhance marketing, sales, and customer service</p>
                    </div>
                </div>
            </div>
            </IconContext.Provider>

            <p className="services"><b><GoCheck /> OUR SERVICES</b></p>
            
            <div className="our-services">
                <ul className="ar">
                    <li><div className="p">
                        <h1>Get <span>Exceptional</span><br></br>Service From Growth</h1>
                    </div>
                    </li><hr></hr>

                    <li><div className="p">
                        <p>Our experience team is here to help you grou your business to a<br></br>
                        new height. We gurantee to provide services at its best to help you<br></br>
                        convert your idea into a brand.
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
            <IconContext.Provider value={{color:'rgb(36, 36, 169)', size:'3em'}}>
                <div className="services2">
                    <div className="row-s">
                        <div className="col">
                            <p><GoDeviceDesktop /></p>
                            <h4>Web Development</h4>
                            <p>Multi-Vendor E-commerce to Small Website, Payment<br></br>
                            Integration, API Integration, Domain Registration, Web<br></br>
                            Hosting, Website Redesign.
                            </p>

                            <p class="read"><b>Read More →</b></p>
                        </div>

                        <div className="col">
                            <p><GoDeviceMobile /></p>
                            <h4>Application Development</h4>
                            <p>Multi-Vendor E-commerce to Small Website, Payment<br></br>
                            Integration, API Integration, Domain Registration, Web<br></br>
                            Hosting, Website Redesign.
                            </p>
                            <p class="read"><b>Read More →</b></p>
                        </div>

                        <div className="col">
                            <p><GoDesktopDownload /></p>
                            <h4>Graphics Design</h4>
                            <p>Multi-Vendor E-commerce to Small Website, Payment<br></br>
                            Integration, API Integration, Domain Registration, Web<br></br>
                            Hosting, Website Redesign.
                            </p>
                            <p class="read"><b>Read More →</b></p>
                        </div>
                    </div>



                    <div className="row-s">
                        <div className="col">
                            <p><GoGraph /></p>
                            <h4>Digital Marketing</h4>
                            <p>Multi-Vendor E-commerce to Small Website, Payment<br></br>
                            Integration, API Integration, Domain Registration, Web<br></br>
                            Hosting, Website Redesign.
                            </p>
                            <p class="read"><b>Read More →</b></p>
                        </div>

                        <div className="col">
                            <p><GoPencil /></p>
                            <h4>Blog</h4>
                            <p>Multi-Vendor E-commerce to Small Website, Payment<br></br>
                            Integration, API Integration, Domain Registration, Web<br></br>
                            Hosting, Website Redesign.
                            </p>
                            <p class="read"><b>Read More →</b></p>
                        </div>

                        <div className="col">
                            <p><GoFileDirectory /></p>
                            <h4>Contact Support</h4>
                            <p>Multi-Vendor E-commerce to Small Website, Payment<br></br>
                            Integration, API Integration, Domain Registration, Web<br></br>
                            Hosting, Website Redesign.
                            </p>
                            <p class="read"><b>Read More →</b></p>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
            

        </div>
     );
}
 
export default Body2;