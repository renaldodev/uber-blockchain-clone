import Image from 'next/image'
import { useState } from 'react'
import avatar from '../tmp/10.png'
import {BsPerson} from 'react-icons/bs'
const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `w-10 h-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `cursor-pointer flex items-center rounded-fullhover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

export default function Navbar() {
  const [account, setAccount] = useState(
    '0xD0A78E35e4d0B8fD38De5248504eA548e4e155eC'
  )
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Lance</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {account ? (
          <div>
            {account.slice(0, 6)}...{account.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton}>
              <BsPerson/>
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}
