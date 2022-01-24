import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'

const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://192.168.100.68:8000/graphql",
        credentials: "include",
    }),
    cache: new InMemoryCache(),
})

export default client
