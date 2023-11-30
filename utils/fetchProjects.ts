import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';

export async function fetchProjects() {
    return sanityClient.fetch(
        groq`
        *[_type == "project"] {
            ...,
            technologies[]->
        }
        `
    )
}