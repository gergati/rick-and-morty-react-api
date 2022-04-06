import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../functions/functions'

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)
  const params = useParams()
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  },[params.id])
  return (
    <>
      {personaje != null ? (
          <div>
            <h2>Personaje con el id: {params.id}</h2>
            <p>{personaje.name}</p>
            <p>Especie: {personaje.species}</p>
            <p>Status: {personaje.status}</p>
            <img src={personaje.image} alt="" />
          </div>
      ) : ("no hay personajes")}
    </>
  )
}

export default Personaje