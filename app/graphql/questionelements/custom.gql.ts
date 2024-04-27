export default `
    directive @cacheControl(maxAge: Int) on FIELD_DIRECTION | OBJECT
    type QuestionElement @cacheControl(maxAge: 86400) {
        question: String
        scratch: String
        answer: String
        canvas: String
        viewcount: Int @cacheControl(maxAge: 60)
    }
`