import React from 'react';
import ThirdImg from "../../assets/aboutUsThird.jpg"
import FourthImg from "../../assets/aboutUsFourth.jpg"
import FifthImg from "../../assets/aboutUsFifth.jpg"
import SixImg from "../../assets/aboutUsSix.jpg"
import SeventhImg from "../../assets/aboutUsSeventh.jpg"
import EightImg from "../../assets/aboutUsThird.jpg"

const dataSection = [
  {
  id:1,
  text: "Organizacji sieci sprzedaży dla dostawców usług i klientów korporacyjnych",
  src: ThirdImg,
  alt:"MprDivisionImg"
},
  { 
  id:2,
  text: "Fundraisingu dla fundacji  i organizacji pozarządowych",
  src: FourthImg,
  alt:"MprDivisionImg"
},

  { 
  id:3,
  text: "Kreowaniu wizerunku  i produkcji  materiałów promocyjnych",
  src: FifthImg,
  alt:"MprDivisionImg"  
},
  { 
  id:4,
   text: "Świadczeniu usług  finansowych,  ubezpieczeniowych i księgowo-prawnych  ",
  src: SixImg,
  alt:"MprDivisionImg"  
},
  { 
  id:5,
 text: "Jeśli prowadzisz firmę lub organizację charytatywną, połączymy Cię z Twoją grupą docelową. Posiadamy profesjonalne grupy sprzedażowe, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców.",
  src: SeventhImg,
  alt:"MprDivisionImg"  
},
  { 
  id:6,
  text: "Działając w coraz większej ilości miast w Polsce nie tylko dostarczymy Ci pożądane rezultaty, ale także będziemy Twoim partnerem w działaniach związanych z budowaniem marki oraz rozwojem Twojej firmy.",
  src: EightImg,
  alt:"MprDivisionImg"  
},
];

const BodyAboutUs = () => {
    return (
        <div className="about-us-content main-section">
            {dataSection.map((obj)=>(
                <div key={obj.id} className="content-box box-section">
                    <img src={obj.src} alt={obj.alt}/>
                    <div className="text-box"> 
                        <div className="text-holder">
                            <p>{obj.text}</p>
                        </div>
                     </div>
                 </div>
            ))}
        </div>
    );
}

export default BodyAboutUs;
