import "./Css/Hero.css"
import herobgimg from "../assets/bg1.png"
const Hero = () =>{
    return(
        <>
            <div className="hero">
                <div className="hero-container">
                    <div className="bg"><img src={herobgimg} alt="" /></div>
                </div>
            </div>
        </>
    )
}
export default Hero