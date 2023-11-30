import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';

export async function fetchPageInfo() {
    return sanityClient.fetch(
        groq`
            *[_type == "pageInfo"][0]
        `
    )
}

