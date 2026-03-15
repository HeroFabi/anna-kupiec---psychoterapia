import { client } from './client'

export type SanityFetchProps = {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}

export const sanityFetch = async <QueryResponse>({
  query,
  params = {},
  tags = [],
}: SanityFetchProps): Promise<QueryResponse> => {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  })
}

// Placeholder for SanityLive component if ever needed in older next-sanity versions
export const SanityLive = () => null
