import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/sideBar.png'
import { Menu } from '@headlessui/react'
import Avatar from 'react-avatar'
import toggle from '../assets/svg/clicker.svg'
import disconnect from '../assets/svg/disconnect.svg'
import bookmark from '../assets/svg/bookmark.svg'
import plane from '../assets/svg/plane.svg'
import trash from '../assets/svg/trash-solid.svg'
import LeftCol from './LeftColumn'
import RightCol from './RightColum'

const NewProject = () => {
  const navigate = useNavigate()
  return (
    <main className="relative h-full w-full flex flex-row">
      <section className="h-[11.25rem] md:h-[19.75rem] lg:h-full w-1/12 cursor-pointer">
        <img
          className="object-cover"
          src={backgroundImage}
          alt="backgroundImage"
          onClick={() => navigate('/')}
        />
      </section>

      <section className="flex-1 w-11/12 bg-lightGray overflow-scroll  ">
        <header>
          <Menu as="div" className=" flex flex-row justify-end mt-4 mr-10">
            <Avatar
              name="Solene Gerard"
              className="userInitials !bg-purple"
              size="50"
              round={true}
            />
          </Menu>
        </header>
        <h1 className="text-center text-2xl uppercase mb-2">Gestion des Projets</h1>
        <div className="grid grid-cols-4 gap-6 mx-4 mb-10 shadow border rounded-2xl border-purple overflow-auto">
          <LeftCol />
          <RightCol />
        </div>
        <img className="absolute bottom-5 left-6 w-5" src={disconnect} alt="logout" />
      </section>
    </main>
  )
}

export default NewProject
