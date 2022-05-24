import image1 from './computer.png';

const Body = () => {
    return (
        <section class="row">
		    <div class="arrange">
                <h1 className="tag">WE HEAR <br></br> WE MAKE IT HAPPEN</h1>   

                <h3>Website Development and Graphics Designing</h3>

                <p>We provide a complete web and app solution by providing you the essential services<br></br>
                including branding, graphic design, UI/UX design, Web Development, content, social <br></br>
                mediaintergration, SEO, and Online Marketing</p>

                <button class="Body-Button">Connect Now</button>

		    </div>

            <img className="Body-Image" src={image1} height={350} width={350} alt="computer-image"/>
            
	    </section>

     );
}
 
export default Body;
