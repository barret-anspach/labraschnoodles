import { createClient } from 'contentful'

const contentClient = createClient({
  space: 'bzwd1l3betfg',
  accessToken: '18ccf154d22dcc8b7375862ef5fb9fbc35effa91367f56b58b101b0e72b6402c'
})

const ContentfulService = {
  contentClient,
  fetchContent (params = {
    content_type: 'puppy',
    include: 10
  }) {
    return this.contentClient.getEntries(params)
      .then((response) => {
        return response.items
      })
  }
}

export default ContentfulService
