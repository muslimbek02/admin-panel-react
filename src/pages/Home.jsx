import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
      <h1 className="text-[36px] text-center mb-[40px]">Home page</h1>
      <div className="flex items-center justify-center">
        <Link to="/login" className='mr-[30px]' >Login qilish</Link>
        <Link to="/dashboard" >Dashboard pagega o'tish</Link>
      </div>
    </div>
  )
}

export default Home