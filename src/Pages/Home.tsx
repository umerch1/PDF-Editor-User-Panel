import "../Styles/loginstyle.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import HeadingSection from "../components/HeadingSection";
import Card from "../components/Card";
import CardsData from "../constants/CardsData";
import circle1 from "../assets/banner/circle1.png";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import { useNavigate } from "react-router-dom";
import { userData } from "../Redux/reducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import routs from "../utilities/Routs";
const Home = () => {
  const dataAccess=useSelector((state:any)=>state.myReducer.userData);
  console.log("dataAccess",dataAccess)
  const navigation=useNavigate();
  useEffect(() => {
    console.log("Data Length",userData.length,userData)
    if (dataAccess.length>1) {
      console.log("Data Length", userData.length,userData)
      navigation(routs.DASHBOARD)
    }else{
      console.log("User not login")
    }
    
  }, [])
  
  return (
    <div>
      {/* ----------------NavBaar--------------- */}
      <Nav />
      {/* ------------------Bannner------------------ */}
      <Banner />
      {/* ------------------Heading----------------- */}
      <HeadingSection />
      {/* ------------------Cards-------------------- */}
      <div className="flex w-full px-20 justify-center">
        {CardsData.map((item) => {
          return (
            <Card
              id={item.id}
              title1={item.title1}
              title2={item.title2}
              para={item.para}
            />
          );
        })}
      </div>
      {/* ------------------Searvices---------------- */}
      <div className="bannerContainer py-20 flex-col">
        <div className="w-full flex flex-row">
          <div className="w-2/4  ">
            <span className="textStyle capitalize mb-2">
              Creating Experiences Through.
            </span>
            <p className="headingTextStyle text-4xl">
              PDF Edit Services, a comprehensive <br /> approach to the wide{" "}
              <br /> area in market.
            </p>
          </div>
          <div className="w-2/4 flex flex-row justify-between">
            <ImageCard />
            <ImageCard />
          </div>
        </div>
        {/* 2nd card Image */}
        <div className="w-full flex flex-row my-12">
          <div className="w-1/4 flex  items-center">
            <img src={circle1} alt="" className="w-[68px] h-[68px] ml-6" />
          </div>
          <div className="w-2/4 flex flex-row justify-between">
            <ImageCard />
            <ImageCard />
          </div>
          <div className="w-1/4"></div>
        </div>
        {/* 3rd card section */}
        <div className="w-full flex flex-row">
          <div className="w-2/4"></div>
          <div className="w-2/4 flex flex-row justify-between">
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </div>
      {/* ----------------------Our Work Section------------------ */}
      <div className="bannerContainer flex-col bg-white">
        <span className="textStyle">Our Work.</span>
        <p className="headingTextStyle text-blueBg text-[40px] mt-3 mb-5">
          Case Studies, a selection of successful projects.
        </p>
        <div className="w-2/4 flex flex-row">
          <div className="textStyle text-[#6A6A7B] w-2/4 text-justify">
          pdfFiller is proud of its massive user base and is committed to delivering the greatest possible experience and value to each customer.
           We collaborate with companies small
            to large around the world to help them engage their audiences and
            build brand awareness.
          </div>
          <div className="textStyle text-[#6A6A7B] w-2/4 text-justify ml-10">
            Our team can create amazing web experiences, beginning with deep
            market research, practical strategies, and professional execution.
            Our client results speak for themselves.
          </div>
        </div>
        <div className="buttonStyle w-[290px] my-8">explore our projects</div>
      </div>
      {/* ---------------Footer Section----------------- */}
      <FooterSection />
      {/* ---------------Footer--------------- */}
      <Footer />
    </div>
  );
};

export default Home;
