import {MenuIcon} from '@heroicons/react/solid'
export default function Header(){
    return (
        <div className="flex justify-between bg-sky-800 py-2 px-10 pl-1 sm:pl-10">
            <a className="flex justify-center items-center text-white text-2xl" href="/">ECOMMERCE</a>
            <div className="flex space-x-10 text-white justify-center items-center ">
                            <a href='/login' className="cursor-pointer hover:underline  sm:flex">Login</a>
            <a href='/cart' className="cursor-pointer hover:underline  sm:flex">Cart</a>   
            </div>
        </div>
    )
}