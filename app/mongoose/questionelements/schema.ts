import { Schema, InferSchemaType } from "mongoose";
export const QuestionELementSchema: Schema = new Schema<QuestionElementType>({
    question: {
        type: String,
        required: true
    },
    scratch: {
        type: String,
    }, 
    answer: {
        type: String, 
    },
    canvas: {
        type: String,
    }, 
    viewcount: {
        type: Number
    }
})

export declare type QuestionElementType = InferSchemaType<typeof QuestionELementSchema>