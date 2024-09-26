import { ObjectId } from "mongoose";

export interface Asset {
  _id: ObjectId;
  name: string;
  type: string;
  size: number;
}
