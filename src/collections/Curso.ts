import type { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  lexicalHTML,
  HTMLConverterFeature,
} from '@payloadcms/richtext-lexical'

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
      name: 'resumen',
      type: 'textarea',
      required: true,
    },
    {
      name: 'descripcion',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(), // Agregar la barra fija
          HTMLConverterFeature({}),
        ],
      }),
      required: true,
    },
    lexicalHTML('descripcion', { name: 'descripcionHTML' }),
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
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
  // hooks: {
  //   beforeChange: [
  //     async ({ data }) => {
  //       if (data.descripcion) {
  //         try {
  //           const html = await convertLexicalToHTML({
  //             data: data.descripcion,
  //             converters: [...defaultHTMLConverters, headingConverter],
  //           })

  //           data.descripcionHTML = html
  //         } catch (error) {
  //           console.error('Error al convertir Lexical a HTML:', error)
  //         }
  //       }
  //       return data
  //     },
  //   ],
  // },
}
