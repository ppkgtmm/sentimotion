import { Document } from 'mongoose';
import { Emotion, Polarity } from '../shared/enums';
export declare type PredictionDocument = Prediction & Document;
export declare class Prediction {
    space_id: string;
    message_id: string;
    polarity: Polarity;
    emotion: Emotion;
}
export declare const PredictionSchema: import("mongoose").Schema<Document<Prediction, any>, import("mongoose").Model<any, any, any>, undefined>;
