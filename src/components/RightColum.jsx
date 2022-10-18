const RightCol = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="py-3  flex justify-around">
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
        <div className="col-span-2 col-start-1">
          <div className="py-3  flex space-x-60 mx-12">
            <h2
              className="text-lightPink text-xl 
                    uppercase  "
            >
              Sous Catégories
            </h2>
            <h2
              className="text-lightPink text-xl 
                    uppercase  "
            >
              Description
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightCol
