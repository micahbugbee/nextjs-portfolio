import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';

export async function fetchExperiences() {
    return sanityClient.fetch(
        groq`
        *[_type == "experience"] {
            ...,
            technologies[]->
        }
        `
    )
}