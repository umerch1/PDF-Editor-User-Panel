interface CardsData{
  id:number,
  title1:string,
  title2:string,
  para:string,
}
const Card = ({id,title1,title2,para}:CardsData) => {
  return (
    <div key={id} className='mx-2 my-10'>
        <div className='mb-4'>
            <p className='textStyle text-2xl text-blueBg font-semibold'>{title1}</p>
            <p className="textStyle text-3xl text-main font-semibold">{title2}</p>
        </div>
        <div className='w-[275px] h-[263px]  border shadow-md shadow-main border-main rounded-xl bg-white p-4'>
            <p className="textStyle text-xl font-light leading-6 text-blueBg ">
            {para}
            </p>
        </div>
    </div>
  )
}

export default Card;