import type { CollectionConfig } from 'payload'

export const Modulos: CollectionConfig = {
    slug: 'modulos',
    labels: {
        singular: 'Módulo',
        plural: 'Módulos'
    },
    admin: {
        useAsTitle: 'titulo'
    },
    fields: [
        {
            name: 'Nombre',
            type: 'text',
            required: true,
        },
        {
            name: 'Descripcion',
            type: 'textarea',
            required: true,
        },
        {
            name: 'curso',
            type: 'relationship',
            relationTo: 'curso', // Asegúrate de que 'cursos' es el slug de tu colección de cursos
            label: 'Curso',
            required: true
        }
    ],

};
export default Modulos;