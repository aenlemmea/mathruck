import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "middleware/db-connect";
import QuestionElements from "mongoose/questionelements/model";
export default async function handler(
    req: NextApiRequest, res: NextApiResponse<any>
) {
    await dbConnect();
    const locations = await QuestionElements.find({});
    res.status(200).json(locations);
}