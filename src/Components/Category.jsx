import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from "../assets/category-thumb-1.jpg";
import img2 from "../assets/category-thumb-2.jpg";
import img3 from "../assets/category-thumb-3.jpg";
import img4 from "../assets/category-thumb-4.jpg";
import img5 from "../assets/category-thumb-6.jpg";
import img6 from "../assets/category-thumb-6 (1).jpg";
import img7 from "../assets/category-thumb-7.jpg";
import img8 from "../assets/category-thumb-8.jpg";




const Category = () =>{

    const categorys = [
        {
            id : "a",
            img : img1,
            categoryName: "Fruits & Veges" 
        },
        {
            id : "b",
            img : img2,
            categoryName: "Breads & Sweets" 
        },
        {
            id : "c",
            img : img3,
            categoryName: "Fruits & Veges" 
        },
        {
            id : "d",
            img : img4,
            categoryName: "Beverages" 
        },
        {
            id : "e",
            img : img5,
            categoryName: "Mrat Products" 
        },
        {
            id : "f",
            img : img6,
            categoryName: "Breads" 
        },
        {
            id : "g",
            img : img7,
            categoryName: "Fruits & Veges" 
        },
        {
            id : "h",
            img : img8,
            categoryName: "Breads & Sweets" 
        },

    ];

    const countGategory = () =>{
        if(window.innerWidth < 768)
            return 2;
        if(window.innerWidth < 992)
            return 3;
        return 5;
    };

    const [visibleCount, setVisible] = useState(countGategory);

    useEffect(() =>{
        const functionCount = () => {
            setVisible(countGategory());
        };
        window.addEventListener("resize", functionCount);
        return()=> window.removeEventListener("resize", functionCount);
    },[]);

    const [index, setIndex] = useState(0);

    const next = () => {
        if(index + 1 >= categorys.length){
            setIndex(0);
        }
        else setIndex(index +1);
    }

     const prev = () => {
        if(index - 1 < 0){
            setIndex(categorys.length);
        }
        else setIndex(index -1);
    }

    return(
        <Container className="mt-4">
            <Row>
                <Col xs={6}>
                    <p className="fs-2 fw-bold">Category</p>
                </Col>
                <Col xs={6} className="text-end">
                    <Button 
                    onClick={prev}
                    className="btn-next-prev">
                        <FaChevronLeft/>
                    </Button>
                    <Button
                    onClick={next}
                    className="btn-next-prev">
                        <FaChevronRight/>
                    </Button>
                </Col>
            </Row>
            <Row sm={2} md={3} lg={5}>
                {categorys.slice(index , index + visibleCount).map((category) =>(
                    <Col key={category.id} className="text-center">
                        <img style={{borderRadius:"50%", marginBottom:"1rem"}} src={category.img} alt="" />
                        <p>{category.categoryName}</p>
                    </Col>
                ))
                }
            </Row>
        </Container>
    )

}

export default Category;