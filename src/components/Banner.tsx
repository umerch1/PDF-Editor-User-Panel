import { FaEdit } from 'react-icons/fa'
import arrow from '../assets/arrow-right.png'
function Banner() {
  return (
    <div className="bannerContainer">
        <div className="leftContainer w-2/4">
             <h6 className="textStyle">Welcome!</h6>
             <h1 className="headingTextStyle">Increase Your <br /> Leads With Expert <br /> PDF Edit And Design.</h1>
             <p className="paraStyle">We build powerful <span className="text-main">PDF Edit solutions & experiences</span><br />  for brands who <span className="text-main">refuse to blend in.</span> </p>
             <div>
                <div className='flex items-center mt-5'>
                    <p className='paraStyle uppercase mr-2'>Case Studies</p>
                    <img src={arrow} alt="Arrow right" className='w-7 h-3' />
                </div>
             </div>
        </div>
        <div className="rightCotainer w-2/4 flex justify-center items-center">
            <div>
              <FaEdit size={400} color='#fff'/>
            </div>
        </div>
       
    </div>
  )
}

export default Banner