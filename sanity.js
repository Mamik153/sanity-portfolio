import {
    createCurrentUserHook,
    createClient
} from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'


const config = {
    projectId: 'pvjoeobk',
    dataset: "production",
    useCdn: true,
    apiVersion: '2022-08-28'
}

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
