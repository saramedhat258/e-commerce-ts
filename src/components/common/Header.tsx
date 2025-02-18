import img from '@assets/cart.svg'
import { Link } from 'react-router-dom'
function Header(){
    return (
        <>
            <div className="flex justify-between w-3/4 m-auto mt-10">
                <p className='text-lg'>our <span className='bg-orange-500 p-2 rounded-lg'>store</span></p>
                <div>
                    <img src={img} alt="cart" className='cursor-pointer' />
                </div>
            </div>
            <div className='w-3/4 m-auto flex justify-between p-3 bg-slate-800 text-white mt-5'>
                <div className='flex gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='categories'>Categories</Link>
                    <Link to='about-us'>About</Link>
                </div>
                <div className='flex gap-5'>
                    <Link to='login'>Login</Link>
                    <Link to='register'>Register</Link>
                </div>
            </div>
        </>
    )
}

export default Header