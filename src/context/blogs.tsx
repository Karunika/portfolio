import React, { createContext, useState, useRef, useEffect, ReactNode } from 'react';
import * as contentful from 'contentful'

export interface BlogsContextType {
    items: contentful.Entry<contentful.EntrySkeletonType, undefined, string>[]
    loading: boolean
    error: string | null
}

export const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const BlogsContextProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [items, setItems] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const client = useRef(
        contentful.createClient({
            space: 'ud4ywsjg17po',
            environment: 'master',
            accessToken: process.env.REACT_APP_ACCESS_TOKEN!,
        })
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.current.getEntries()
                setItems(response.items);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <BlogsContext.Provider value={{ items, loading, error }}>
            {children}
        </BlogsContext.Provider>
    );
};
