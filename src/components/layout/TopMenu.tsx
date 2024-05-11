import { MenuItems } from "@/components/layout/MenuItems";
import logo from "@public/logo/logo_real_state.png";
import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";




export function TopMenu() {


  return (

    <header className='w-full fixed top-0 z-50'>

      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />


      {/* Navbar */}
      <div className="w-full navbar bg-base-300/95 backdrop-blur-lg shadow-md">
        <div className="flex-none sm:hidden">
          <label htmlFor="drawer-menu" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <LuMenu size='24' />
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link href="/">
            <Image src={logo} alt='logo' className='h-fit w-52 object-cover' priority />
          </Link>
        </div>
        <div className='hidden sm:flex'>
          <MenuItems className='menu menu-horizontal'/>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="drawer-menu" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className='menu p-4 w-80 min-h-full bg-base-200'>
          <Image src={logo} alt='logo' className='h-fit w-48 object-cover mb-10'/>
          <MenuItems/>
        </div>
      </div>


    </header>

  )
}