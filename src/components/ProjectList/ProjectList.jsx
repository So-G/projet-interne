import React from 'react'
import { Menu } from '@headlessui/react'
import Avatar from 'react-avatar'
import sidebar from '../../assets/sideBar.png'
import toggle from '../../assets/svg/clicker.svg'
import disconnect from '../../assets/svg/disconnect.svg'

const ProjectList = () => {
  return (
    <main className="relative h-full w-full flex flex-col lg:flex-row">
      <section className="h-[11.25rem] md:h-[19.75rem] lg:h-full">
        <header>
          <Menu as="div" className="absolute top-4 right-4">
            <Avatar name="Lisa Peruzzo" className="userInitials" size="45" round={true} />
          </Menu>
        </header>
        <img className="h-full w-full object-cover" src={sidebar} alt="backgroundImage" />
      </section>
      <section className="flex-1 max-h-full bg-lightGray ">
        <div className="flex flex-col mt-20 items-left text-center ">
          <h1 className="uppercase text-2xl font-bold mx-auto">Gestion des projets</h1>
          <div className=" ml-8 mr-24 flex flex-row  mt-6 border border-purple  rounded-md ">
            <div className="flex flex-col border w-96 text-left pl-4">
              <div className="mt-2 text-purple uppercase font-bold text-left max-h-80 ">
                Projets
              </div>
              <ul>
                <li className="text-purple text-xs py-2">Nouveau Projet</li>
                <li className="text-xs py-1">Delt'App</li>
                <li className="text-xs py-1">Design System</li>
                <li className="text-xs py-1">Projet Interne</li>
                <li className="text-xs py-1">Granulométrie</li>
                <li className="text-xs py-1">Ressources Humaines</li>
                <li className="text-xs py-1">Recrutement</li>
                <li className="text-xs py-1">Drive</li>
                <li className="text-xs py-1">Communication</li>
                <li className="text-xs py-1">Image Four</li>
                <li className="text-xs py-1">Sococim</li>
                <li className="text-xs py-1">Détection Fuite de Gaz</li>
                <li className="text-grayishPurple text-xs py-1">Calculette CO2</li>
                <li className="text-grayishPurple text-xs py-1">Plaque Immatriculation</li>
                <li className="text-grayishPurple text-xs py-1">Direct Time</li>
                <li className="text-grayishPurple text-xs py-1">Jeffrey's Home</li>
                <li className="text-grayishPurple text-xs pt-1 pb-6">Quantification de phases</li>
              </ul>
            </div>
            <div className="flex flex-col w-96 text-left pl-4">
              <div className="flex flex-row justify-between ">
                <h2 className="bg-veryLightPurple text-lightPink text-lg font-bold uppercase mt-4 ml-4">
                  Nouveau Projet
                </h2>
                <div className="flex flex-col">
                  <img className="w-16 mt-4 mr-6" src={toggle} alt="toggle" />
                  <p className="text-fuchsia text-sm mr-6 pt-1">Actif</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-lightPink uppercase">ASSIGNATION</div>
                <div className="py-3 flex">
                  <div className="flex-1 space-x-4">
                    <button className="inline-flex   ">Développeur</button>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl text-fuchsia bg-veryLightPurple ">
                      UX/UI
                    </button>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl text-fuchsia bg-veryLightPurple ">
                      Data
                    </button>
                    <button className="inline-flex items-center px-4 py-2  text-sm font-bold rounded-xl text-fuchsia bg-veryLightPurple ">
                      Interne
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-lightPink uppercase">Sous Catégories</div>
                <div className="text-lightPink uppercase">Description</div>
              </div>
              <div className="flex flex-row justify-between">
                <button className="bg-lightPink text-white px-4 py-2 border rounded-md">
                  + Ajouter
                </button>
                <textarea
                  rows={6}
                  type="text"
                  className="bg-veryLightPurple text-lightPink pl-2 "
                  placeholder="Description du projet..."
                />
              </div>
              <div className="flex flex-row ">
                <div className="py-3 flex">
                  <div className="flex-1 space-x-4">
                    <button className="inline-flex items-center px-4 py-2 border border-fuchsia shadow-sm text-sm font-medium rounded-md text-fuchsia bg-white ">
                      Supprimer
                    </button>
                    <button className="inline-flex items-center px-4 py-2 border border-fuchsia shadow-sm text-sm font-medium rounded-md text-fuchsia bg-white ">
                      {/* <BookmarkIcon className="-ml-1 mr-2 h-5 w-5" /> */}
                      Enregistrer
                    </button>
                    <button className="inline-flex items-center px-4 py-2 border border-fuchsia shadow-sm text-sm font-medium rounded-md text-fuchsia bg-white ">
                      Publier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute bottom-5 left-4 w-4" src={disconnect} alt="logout" />
      </section>
    </main>
  )
}

export default ProjectList
