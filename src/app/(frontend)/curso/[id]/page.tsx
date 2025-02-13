import { getPayload } from 'payload'
import { lexicalToHTML } from '@payloadcms/richtext-lexical'
import { Media } from '@/payload-types'
import config from '@/payload.config'
import Image from 'next/image'

export default async function CursoPage({ params }: { params: { id: string } }) {
  const payload = await getPayload({ config })
  const curso = await payload.findByID({ collection: 'curso', id: params.id }) // Busca curso por ID

  if (!curso) {
    return <p>Curso no encontrado</p>
  }

  return (
    <div>
      <h1>{curso.nombre}</h1>
      <div>
        <strong>Descripción:</strong>
        <div dangerouslySetInnerHTML={{ __html: lexicalToHTML(curso.descripcion) }} />
      </div>
      <p>
        <strong>Estado:</strong> {curso.estado ? 'Activo' : 'Inactivo'}
      </p>
      <p>
        <strong>Fecha de Inicio:</strong> {curso.fechaInicio || 'No especificada'}
      </p>
      <p>
        <strong>Fecha de Caducidad:</strong> {curso.fechaCaducidad || 'No especificada'}
      </p>
      <p>
        <strong>Recurso:</strong> {curso.recurso}
      </p>

      {curso.logo && (
        <div>
          <h3>Logo:</h3>
          <Image
            src={(curso.logo as Media).url!}
            alt={(curso.logo as Media).alt ?? ''}
            width={150}
            height={150}
          />
        </div>
      )}

      <a href="/cursos">
        <button
          style={{ marginTop: '20px', padding: '10px', backgroundColor: '#0070f3', color: 'white' }}
        >
          Volver a la lista de cursos
        </button>
      </a>
    </div>
  )
}
