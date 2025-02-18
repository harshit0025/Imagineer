import { Document, model, models, Schema } from "mongoose";

export interface IImage extends Document {
    title: string;
    tranformationType: string;
    publicID: string;
    secureUrl: URL;
    widht?: number; // Assuming this was a typo for "width"
    height?: number;
    config?: object; // Object type as key-value pairs
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string,
        firstName: string,
        lastName: string
    }; // Reference to User model
    createdAt?: Date;
    updatedAt?: Date;
 }

const ImageSchema = new Schema({
    title: {type: String, required: true},
    tranformationType: {type: String, required: true},
    publicID: {type: String, required: true},
    secureUrl: {type: URL, required: true},
    widht: { type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: { type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref:'User' },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;