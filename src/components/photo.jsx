import Subject from '../assets/Subject.png'



export default function Photo(){
  return (
    <div className="w-full h-full relative">
      <div className=' xl:w-[498px] xl:h-[498px] '>

        <img src={Subject} alt="" className='object-contain' />     
      </div>
    </div>
  )
}
