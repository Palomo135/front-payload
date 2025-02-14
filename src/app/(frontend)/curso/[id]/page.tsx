import { getPayload } from 'payload'
import { Media } from '@/payload-types'
import config from '@/payload.config'
import Image from 'next/image'

async function getCurso(id: string) {
  const payload = await getPayload({ config })
  return await payload.findByID({ collection: 'curso', id })
}

export default async function CursoPage({ params }: { params: Promise<{ id: string }> }) {
  const curso = await getCurso((await params).id)

  if (!curso) {
    return <p>Curso no encontrado</p>
  }

  const getDescriptionText = (descripcion: any) => {
    if (!descripcion?.root?.children?.[0]?.children) {
      return 'Sin descripción'
    }

    return descripcion.root.children[0].children.map((child: any) => child.text || '').join('')
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'No especificada'
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const calcularDuracion = (inicio: string | null | undefined, fin: string | null | undefined) => {
    if (!inicio || !fin) return 'No especificada'

    const fechaInicio = new Date(inicio)
    const fechaFin = new Date(fin)

    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      return 'Fechas inválidas'
    }

    const diferenciaMs = fechaFin.getTime() - fechaInicio.getTime()
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24))

    if (dias < 7) {
      return `${dias} día${dias !== 1 ? 's' : ''}`
    } else if (dias < 30) {
      return `${Math.floor(dias / 7)} semana${dias >= 14 ? 's' : ''}`
    } else {
      return `${Math.floor(dias / 30)} mes${dias >= 60 ? 'es' : ''}`
    }
  }

  return (
    <div>
      <h1>{curso.nombre}</h1>
      <div>
        <strong>Descripción: </strong>
        {getDescriptionText(curso.descripcion)}
      </div>
      <p>
        <strong>Estado:</strong> {curso.estado ? 'Activo' : 'Inactivo'}
      </p>
      <p>
        <strong>Duración:</strong> {calcularDuracion(curso.fechaInicio, curso.fechaCaducidad)}
      </p>
      <p>
        <strong>Fecha de Inicio:</strong> {formatDate(curso.fechaInicio)}
      </p>
      <p>
        <strong>Fecha de Caducidad:</strong> {formatDate(curso.fechaCaducidad)}
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

      <a href={'/curso'}>
        <button
          style={{ marginTop: '20px', padding: '10px', backgroundColor: '#0070f3', color: 'white' }}
        >
          Volver a la lista de cursos
        </button>
      </a>
    </div>
  )
}
