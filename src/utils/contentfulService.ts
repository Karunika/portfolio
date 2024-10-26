import * as contentful from 'contentful'
import moment from 'moment';

const formatTimestamp = (timestamp: string) => moment(timestamp).format('MMMM Do, YYYY h:mm A');

const getItem = (item: any) => {
    return {
        id: String(item?.sys?.id),
        createdAt: formatTimestamp(item?.sys?.createdAt),
        ...item?.fields
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


