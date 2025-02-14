import { getPayload } from 'payload'
import Link from 'next/link'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Obtener la lista de cursos
  const { docs: cursos } = await payload.find({
    collection: 'curso', // Nombre de la colección en Payload CMS
  })

  return (
    <div className="container">
      <h1 className="title">Lista de Cursos</h1>
      <ul className="cursos-list">
        {cursos.map((curso) => (
          <li key={curso.id} className="curso-item">
            <Link href={`/curso/${curso.id}`}>
              <div>
                <h2>{curso.nombre}</h2>
                <p>{curso.descripcion.root.children[0].type || 'Sin descripcion'}</p>
                <p>
                  <strong>Estado:</strong> {curso.estado ? 'Activo' : 'Inactivo'}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
