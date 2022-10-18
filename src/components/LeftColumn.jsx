import toggle from '../assets/svg/clicker.svg'

const LeftCol = () => {
  return (
    <>
      <div className="py-3  flex justify-between border border-purple border-t-0 border-l-0">
        <label className="col-span-1 mt-2 ml-3 text-purple  text-lg uppercase font-bold text-left overflow-auto">
          Projets{' '}
        </label>
        <button className="gradient mt-2 mr-4  w-8 h-8 cursor-pointer text-xl rounded-md  text-white text-center justify-center" onClick={() => alert('Vous allez créer un nouveau projet')}>
          +
        </button>
      </div>
      <div className="col-span-3 col-start-2 flex justify-between">
        <h1 className="ml-8 w-fit bg-veryLightPurple text-lightPink items-center text-2xl font-bold uppercase my-4 py-1 px-4">
          Nouveau Projet
        </h1>
        <div className="col-span-1 pt-3">
          <div className="flex flex-col">
            <img className="w-14 mr-10" src={toggle} alt="toggle" />
            <p className="text-fuchsia text-sm pt-1 text-center mr-10 ">Actif</p>
          </div>
        </div>
      </div>
      <ul className="col-span-1 col-start-1 ml-4 border border-r-purple border-t-0 border-l-0 ">
        <li className="text-purple text-md py-4 w-fit cursor-pointer">Nouveau Projet</li>
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
        <li className="text-grayishPurple text-sm pt-1 pb-6">Quantification de phases</li>
      </ul>
    </>
  )
}

export default LeftCol
