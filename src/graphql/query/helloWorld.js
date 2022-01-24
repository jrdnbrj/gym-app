import { useQuery, gql } from "@apollo/client"

const helloWorld = gql`
    query {
        helloWorld
    }
`;

export default helloWorld;
