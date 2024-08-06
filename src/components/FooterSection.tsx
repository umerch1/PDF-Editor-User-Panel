import logo from '../assets/PDF_TECH.svg';
import NavData from '../constants/NavData';
const FooterSection = () => {
  return (
    <div className='bannerContainer justify-between py-40'>
        {/*---------- Logo-------------- */}
        <div className='w-1/4'>
            <img src={logo} alt="PDF Edit" className='w-[150px] h-[90px] ' />
            <p className='textStyle text-white text-xl capitalize'>We are an eclectic bunch of creatives driven by the idea that our work can have a positive impact.</p>
        </div>
        {/* -------NavBar------------ */}
        <div className='w-1/4'>
            {NavData.map((item)=>{
                return(
                    <div className='textStyle text-xl text-white'>
                        {item.title}
                    </div>
                )
            })}
        </div>
        {/* -------Services------------ */}
        <div>  </div>
        {/* -------Contact------------ */}
        <div className='w-1/4'>
            <h1 className='textStyle'>Contact</h1>
            <span className='textStyle text-white font-light capitalize'>Virtual University</span>
            <div className='my-6'>
                <h1 className='textStyle text-white font-light lowercase'>umerf3024@gmail.com</h1>
                <h1 className='textStyle text-white font-light lowercase'>+923094162466</h1>
            </div>
        </div>
    </div>
  )
}

export default FooterSection;