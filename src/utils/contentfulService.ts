import * as contentful from 'contentful'
import moment from 'moment';

interface Item {
    id: string
    createdAt: string
    data: string
    title: string
    thumbnail: string
    thumbnailCourtesyLink: string
    thumbnailCourtesyText: string
    keywords?: string
}

const formatTimestamp = (timestamp: string) => moment(timestamp).format('MMMM Do, YYYY h:mm A');

const getItem = (item: any): Item => {
    return {
        id: String(item?.sys?.id),
        createdAt: formatTimestamp(item?.sys?.createdAt),
        ...item?.fields,
        thumbnail: 'https:' + item.fields.thumbnail.fields.file.url
    }
}

const client = contentful.createClient({
    space: 'ud4ywsjg17po',
    environment: 'master',
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
})

export const getEntry = (id: string) => client.getEntry(id)
    .then(getItem)

export const getEntries = () => client.getEntries()
    .then(res => res.items)
    .then(items => items.map(getItem))

