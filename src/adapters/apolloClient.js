import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'

const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://192.168.100.187:8000/graphql",
        credentials: "include",
    }),
    // uri: "http://192.168.100.68:8000/graphql",
    cache: new InMemoryCache(),
})

export default client
