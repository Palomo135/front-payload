import { getPayload } from 'payload'
import Link from 'next/link'
import config from '@/payload.config'

export default async function CursosPage() {
  const payload = await getPayload({ config })
  const { docs: cursos } = await payload.find({ collection: 'curso' }) // Obtiene la lista de cursos

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {cursos.map((curso: any) => (
          <li
            key={curso.id}
            style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
          >
            <h2>{curso.nombre}</h2>
            <p>
              <strong>Estado:</strong>
              {curso.estado ? 'Activo' : 'Inactivo'}
            </p>
            <p>
              <strong>Descipción:</strong>
              {curso.descipcion}
            </p>
            <Link href="/curso/${curso.id}">
              <button
                style={{
                  backgroundColor: '#0070f3',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                Ver detalles
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
