import type { CollectionConfig } from 'payload'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'

export const Curso: CollectionConfig = {
    slug: 'curso',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'nombre', // Esto hará que el select muestre el nombre del curso
    },
    fields: [
        {
            name: 'nombre',
            type: 'text',
            required: true,
        },
        {
            name: 'descripcion',
            type: 'richText',
            required: true,
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    FixedToolbarFeature(), // Agregar la barra fija
                ],
            }),
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'fechaInicio',
            type: 'date',
        },
        {
            name: 'fechaCaducidad',
            type: 'date',
        },
        // {
        //     name: 'encargado',
        //     type: 'relationship',
        //     relationTo: 'encargado', // Asumiendo que tienes una colección 'encargado'
        //     required: true,
        // },
        {
            name: 'estado',
            type: 'checkbox',
            defaultValue: true,
        },
        {
            name: 'recurso',
            type: 'text',
            required: true,
        },
        // {
        //     name: 'modulos',
        //     type: 'relationship',
        //     relationTo: 'modulo', // Asumiendo que tienes una colección 'modulo'
        //     hasMany: true,
        // },
    ],
}