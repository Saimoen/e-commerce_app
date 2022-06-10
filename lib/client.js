import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '5snie2xd',
    dataset: 'production',
    apiVersion: '2022-06-09',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)