import { client } from './client'

export const getHomepageData = async () => {
  const query = `*[_type == "homepage"][0] {
    hero,
    about,
    specializations,
    methods,
    symptoms,
    pricing,
    forWhom,
    contact
  }`
  
  const data = await client.fetch(query)
  return data
}
