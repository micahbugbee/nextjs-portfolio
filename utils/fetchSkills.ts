import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';


export async function fetchSkills() {
    return sanityClient.fetch(
        groq`
        *[_type == "skill"]
        `
    )
}