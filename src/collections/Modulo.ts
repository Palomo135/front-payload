import type { CollectionConfig } from 'payload'

export const Modulo: CollectionConfig = {
    slug: 'modulo',
    access: {
        read: () => true,
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
            relationTo: 'curso',
            required: true
        }
    ],

};
export default Modulo;