import gql from "graphql-tag";
import questionElementsTypeDefsCustom from "graphql/questionelements/custom.gql";
import questionElementsTypeDefsQueries from "graphql/questionelements/queries.gql";
import questionElementsTypeDefsMutations from "graphql/questionelements/mutations.gql";


export const typeDefs = gql`
    ${questionElementsTypeDefsCustom}

    type Query {
        ${questionElementsTypeDefsQueries}
    }

    type Mutation {
        ${questionElementsTypeDefsMutations}
    }
`