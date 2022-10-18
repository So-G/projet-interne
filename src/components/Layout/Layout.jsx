import React from 'react'
import backgroundImage from '../../assets/background.jpg'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Layout = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <main className="relative h-full w-full flex flex-col lg:flex-row-reverse">
      <section className="h-[11.25rem] md:h-[19.75rem] lg:h-full lg:w-8/12">
        <img className="h-full w-full object-cover" src={backgroundImage} alt="backgroundImage" />
      </section>
      <section className="flex-1 ">
        {' '}
        <div className="flex flex-col mt-40  mx-auto w-2/3">
          <h1 className="uppercase text-2xl font-bold text-center mb-12">Se Connecter</h1>
          <form className="flex flex-col">
            <label className="mt-4 text-sm font-bold">Adresse email</label>
            <input
              {...register('email', {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Veuillez entrer une adresse email valide'
                }
              })}
              className="mt-2 py-2 pl-2 border border-canaryYellow rounded-md focus:outline-none focus:ring-1 focus:ring-canaryYellow bg-lightGray text-canaryYellow"
              type="email"
            />
            {errors.email && (
              <span className="text-sm text-strawberryRed mt-2">{errors.email.message}</span>
            )}
            <label className="mt-4 text-sm font-bold">Mot de passe</label>
            <input
              type="password"
              className="mt-2 py-2 pl-2 border border-canaryYellow rounded-md focus:outline-none focus:ring-1 focus:ring-canaryYellow bg-lightGray  bg-lightGray  text-canaryYellow"
            />

            <div className="flex flex-row justify-between mt-2">
              <p className="text-xs text-darkGray cursor-pointer">S'inscrire</p>
              <p className="text-xs text-darkGray cursor-pointer">Mot de passe oublié ?</p>
            </div>
            <input
              type="submit"
              value="Connexion"
              className="mt-14 py-1.5 text-lg border border-canaryYellow rounded-md bg-canaryYellow text-white w-44 mx-auto cursor-pointer"
              onClick={() => navigate('/test')}
            />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Layout
