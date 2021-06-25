import gql from 'graphql-tag'

export const PRODUCTS = gql`
    query {
        products {
            nodes {
                id
                name
                slug
                masterVariant {
                    defaultPrice {
                        amount
                        displayAmount
                    }
                }
            }
            pageInfo {
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
            }
        }
    }
`
