import Subject from '../assets/Subject.png'



export default function Photo(){
  return (
    <div className="w-full h-full relative">
        <img src={Subject} alt="" className='object-contain' />
    </div>
  )
}
