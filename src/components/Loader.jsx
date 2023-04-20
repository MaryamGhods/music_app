import {loader} from '../assets'; 

const Loader = ({title}) => {
  return(
    <div className="w-full flex justify-center items-center flex-col m-4">
      <h2 className="font-bold text-2xl text-white">{title || 'در حال بارگزاری ...'}</h2>
      <img src={loader} alt="loading image" className='w-32 h-32 object-contain my-4' />
    </div>
  )
};

export default Loader;