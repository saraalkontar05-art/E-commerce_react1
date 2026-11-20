import { Button, Container } from "react-bootstrap";
import bgBaner from "../assets/banner-1.jpg";
import {FaRecycle, FaSeedling, FaTruck } from "react-icons/fa";

const Baner = (() =>{

    return(
        <Container fluid className="mt-2 pt-5 px-5"
        style={{backgroundImage:`url(${bgBaner})`, backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}
        >
            <h1 style={{fontSize:"calc(1.625rem + 4.5vw)", maxWidth:"600px", fontWeight:"normal"}}><strong style={{color:"rgba(107,178,1,1)"}}>Organic</strong> Foods at your <strong> Doorsteps</strong></h1>
            <p style={{color:"#747474", fontSize:"calc(1.275rem + .3vw)",marginTop:"2rem"}}>Dignissim massa diam elementum.</p>
            <div className="mt-5">
                <Button className="border-0 rounded-5 p-3"
                style={{backgroundColor:"rgba(107,178,1,1)", letterSpacing:"0.1rem"}}
                onClick={()=> document.getElementById("products").scrollIntoView({behavior:"smooth"})}
                >START SHOPPING</Button>
                <Button className="border-0 rounded-5 ms-3 p-3 bg-black"
                style={{letterSpacing:"0.1rem"}}
                >JOIN NOW</Button>
            </div>
            <div className="d-flex gap-3 mt-4" >
                <div>
                    <p className="fw-bold mb-0" style={{fontSize: "calc(1.375rem + 1.5vw)"}}>14k+</p>
                    <p style={{letterSpacing:"0.1rem", width:"75%"}}>PRODUCT VARIETIES</p>
                </div>
                <div>
                    <p className="fw-bold mb-0" style={{fontSize: "calc(1.375rem + 1.5vw)"}}>50k+</p>
                    <p style={{letterSpacing:"0.1rem", width:"75%"}}>HAPPY CUSTOMERS</p>
                </div>
                <div>
                    <p className="fw-bold mb-0" style={{fontSize: "calc(1.375rem + 1.5vw)"}}>10+</p>
                    <p style={{letterSpacing:"0.1rem", width:"75%"}}>STORE LOCATION</p>
                </div>
            </div>

            <div className="text-white text-center d-md-flex mt-5">
                <div className="p-4" style={{backgroundColor:"rgba(107,178,1,1)"}}>
                    <FaRecycle className="fs-1 mb-3"/>
                    <div className="text-start">
                        <p className="fw-bold fs-4 mb-0">Fresh from farm</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
                <div className="p-4" style={{backgroundColor:"rgba(54,65,39,1)"}}>
                    <FaSeedling className="fs-1 mb-3"/>
                    <div className="text-start">
                        <p className="fw-bold fs-4 mb-0">100% Organic</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
                <div className="p-4" style={{backgroundColor:"rgba(249,95,9,1)"}}>
                    <FaTruck className="fs-1 mb-3"/>
                    <div className="text-start">
                        <p className="fw-bold fs-4 mb-0">Free delivery</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
})

export default Baner;