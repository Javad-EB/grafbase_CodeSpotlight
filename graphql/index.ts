export const getUserQuery = `
query GetUser($email: string) {
    user(by: {email : $email}){
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
    }
}
`

export const createUSerMutation = `
mutation CreateUser($input: UserCreateInput!){
    userCreate(input: $input){
        user{
            name
            email
            avatarUrl
            description
            githunUrl
            linkedInUrl
            id
        }
    }
} 
`