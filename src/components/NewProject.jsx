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

      <section className="flex-1 w-11/12 bg-lightGray  ">
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
        <h1 className="uppercase text-4xl font-bold text-center">Gestion des projets</h1>
        <div className="py-4 px-10">
          <fieldset className="shadow border rounded-2xl border-purple mb-20">
            <div className="pl-4 py-5 ">
              <div className="grid grid-cols-4 gap-6 ">
                <div className="col-span-1 ">
                  <div className="flex flex-row overflow ">
                    <label className="mt-1 text-purple text-lg uppercase font-bold text-left ">
                      Projets{' '}
                    </label>
                    <div className="gradient mt-1 ml-36 w-8 cursor-pointer text-xl rounded-md  text-white text-center align-center">
                      +
                    </div>
                  </div>
                  <ul>
                    <li className="text-purple text-md py-4 w-fit cursor-pointer">
                      Nouveau Projet
                    </li>
                    <li className="text-sm py-1 cursor-pointer">Delt'App</li>
                    <li className="text-sm py-1">Design System</li>
                    <li className="text-sm py-1">Projet Interne</li>
                    <li className="text-sm py-1">Granulométrie</li>
                    <li className="text-sm py-1">Ressources Humaines</li>
                    <li className="text-sm py-1">Recrutement</li>
                    <li className="text-sm py-1">Drive</li>
                    <li className="text-sm py-1">Communication</li>
                    <li className="text-sm py-1">Image Four</li>
                    <li className="text-sm py-1">Sococim</li>
                    <li className="text-sm py-1">Détection Fuite de Gaz</li>
                    <li className="text-grayishPurple text-sm py-1">Calculette CO2</li>
                    <li className="text-grayishPurple text-sm py-1">Plaque Immatriculation</li>
                    <li className="text-grayishPurple text-sm py-1">Direct Time</li>
                    <li className="text-grayishPurple text-sm py-1">Jeffrey's Home</li>
                    <li className="text-grayishPurple text-sm pt-1 pb-6">
                      Quantification de phases
                    </li>
                  </ul>
                </div>
                <div className="mt-8 col-span-3 col-start-2">
                  <div className="flex justify-between">
                    <h2 className="ml-8 bg-veryLightPurple text-lightPink  text-2xl font-bold uppercase pt-3 px-4 w-fit items-center">
                      Nouveau Projet
                    </h2>
                    <div className="col-span-1 pt-3">
                      <div className="flex flex-col">
                        <img className="w-14 mr-10" src={toggle} alt="toggle" />
                        <p className="text-fuchsia text-sm pt-1 text-center mr-10 ">Actif</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mt-96 col-span-3 col-start-2">
                  <div className="flex space-x-20 mx-12">
                    <h2
                      className="text-lightPink text-xl 
                    uppercase  "
                    >
                      Assignation
                    </h2>
                    <button className="text-fuchsia rounded-xl bg-veryLightPurple text-lg bg px-2 py-1">
                      Développeur
                    </button>
                    <button className="text-fuchsia rounded-xl bg-veryLightPurple text-lg px-2 py-1">
                      UX/UI{' '}
                    </button>
                    <button className="text-fuchsia rounded-xl bg-veryLightPurple text-lg  px-2 py-1">
                      Data
                    </button>
                    <button className="text-fuchsia rounded-xl bg-veryLightPurple text-lg px-2 py-1">
                      Interne{' '}
                    </button>
                  </div>
                </div>
                <div className="-mt-96 col-span-3 col-start-2">
                  <div className="py-3 flex space-x-72 ml-12">
                    <h2 className="text-lightPink text-xl uppercase mt-12 ">Sous Catégories</h2>
                    <h2 className="text-lightPink text-xl uppercase mt-12">Description</h2>
                  </div>
                </div>
                <div className="-mt-80 col-span-3 col-start-2 mx-12">
                  <button className=" w-32 bg-lightPink text-white text-lg py-2 border rounded-md mt-4 ml-2 max-h-fit">
                    + Ajouter
                  </button>
                  <div className="py-3 flex justify-between  mx-12 ">
                    <button className="w-32    py-2  "></button>
                    <textarea
                      className="w-1/2 -mt-14 bg-veryLightPurple text-lg text-lightPink px-2 py-2  rounded-md focus:outline-none focus:ring-1 focus:ring-purple h-72"
                      placeholder="Description du projet..."
                    />
                  </div>
                </div>
                <div className="col-span-3 col-start-2 mx-12">
                  <button
                    onClick={() => console.log('Delete')}
                    className="inline-flex text-center items-center px-4 py-2 border border-fuchsia shadow-sm text-lg font-medium rounded-xl text-fuchsia bg-white"
                  >
                    <img className="-ml-1 mr-2 h-5 w-5 text-fuchsia " src={trash} alt="trash" />{' '}
                    Supprimer
                  </button>
                </div>
                <div className="col-span-2 col-start-3">
                  <div className="-mt-20 pl-2 py-3 text-right mx-12">
                    <div className="flex-1 space-x-8 ">
                      <button
                        onClick={() => console.log('Save')}
                        id="saveButton"
                        className="ml-24 inline-flex items-center px-4 py-2 border border-fuchsia shadow-sm text-lg font-medium rounded-xl text-fuchsia bg-white"
                      >
                        <img className="pr-2" src={bookmark} alt="bookmark" />
                        Enregistrer
                      </button>

                      <button
                        name="sendButton"
                        onClick={() => console.log('Send')}
                        id={'sendQuoteButton'}
                        className="w-36 inline-flex items-center pl-6 pr-4 py-2 border border-fuchsia shadow-sm text-lg font-medium rounded-xl text-white bg-fuchsia"
                      >
                        <img className="pr-2" src={plane} alt="plane" />
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <img className="absolute bottom-5 left-6 w-5" src={disconnect} alt="logout" />
      </section>
    </main>
  )
}

export default NewProject
