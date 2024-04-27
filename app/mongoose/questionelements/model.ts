import mongoose, { model } from "mongoose";
import { QuestionELementSchema, QuestionElementType } from "./schema";

export default mongoose.models.questionelements || model<QuestionElementType>("questionelements", QuestionELementSchema);