import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';


export async function fetchSocials() {
    return sanityClient.fetch(
        groq`
            *[_type == "social"]
        `
    )
}