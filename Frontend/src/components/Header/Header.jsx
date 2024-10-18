
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import mealContext from '../../context/mealContext'

const Header = () => {
    const { user,setuser } = useContext(mealContext)
    useEffect(() => { 
    },[user])

  return (
        <nav className="flex-between h-[10vh] border-b-[1px]">
            <NavLink to="/" >
                <div className="nav_logo flex-center gap-2 cursor-pointer">
                    
                    <h3>Meal<br className='m-0' />Mate</h3>
                    <img src="/assets/logo.svg" width={50} alt="Meal planner logo" />
                </div>
            </NavLink>
            <ul className="nav_links flex-between w-[55%]">
            <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-3 py-0.5 text-white font-semibold bg-lime-500 '>
            <li className='text-xl text-white font-semibold'>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                </li>
                </button>
                {/* <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-1 py-.5 text-gray-00 font-semibold bg-lime-500'>
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/meal-planner" >
                        Meal Plan
                    </NavLink>
                </li>
                
                </button> */}
                <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-3 py-0.5 text-white font-semibold bg-lime-500'>
                <li className='text-xl text-white font-semibold'>
                    <NavLink to="/plannernew" >
                        Planner
                    </NavLink>
                </li>
                </button>
                <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-1 py-0.5 text-white font-semibold bg-lime-500'>
                <li className='text-xl text-white font-semibold'>
                    <NavLink to="/meal-tracker" >
                        Nutrition Tracker
                    </NavLink>
                </li>
                </button>
                <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-3 py-0.5 text-gray-400 font-semibold bg-lime-500'>
                <li className='text-xl text-white font-semibold'>
                    <NavLink to="/recipes" >
                        Recipes
                    </NavLink>
                </li>
                </button>
                <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-3 py-0.5 text-gray-400 font-semibold bg-lime-500'>
                <li className='text-xl text-white font-semibold'>
                    <NavLink to="/notification" >
                        Notification
                    </NavLink>
                </li>
                </button>
               
                <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-3 py-0.5 text-gray-400 font-semibold bg-lime-500'>
                <li className='text-xl text-white font-semibold'>
                    <NavLink to="/BMI" >
                       BMI Calculate
                    </NavLink>
                </li>
                </button>
            </ul>
            <div className="nav_auth text-xl">
                
            {
                    localStorage.getItem('login') !== 'true'  ? 
                    <>
                        <button className='cursor-pointer hover:scale-110  duration-300 rounded-full px-5 py-2 text-gray-400 font-semibold'>
                            <NavLink to="/login">
                                Log In
                            </NavLink>
                        </button>
                        <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-5 py-2 text-gray-400 font-semibold'>
                            <NavLink to="/signup">
                                Sign Up
                            </NavLink>
                        </button>
                    </>
                    :
                    <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] bg-black shadow-xl rounded-full px-5 py-2 text-white font-semibold' onClick={() => {
                        setuser({
                            id: 0, 
                            email: '', 
                            name: ''
                        })
                        localStorage.removeItem('login')
                        localStorage.removeItem('id')
                    }}>
                        <NavLink to="/">
                            Log Out
                        </NavLink>
                    </button> 
                }
            </div>
        </nav>
  )
}

export default Header