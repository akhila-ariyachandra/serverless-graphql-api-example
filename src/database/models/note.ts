import {
  Document,
  SchemaDefinition,
  SchemaTypes,
  Schema,
  Connection,
  Model
} from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  date: Date;
}

const schema: SchemaDefinition = {
  title: { type: SchemaTypes.String, required: true },
  content: { type: SchemaTypes.String, required: true },
  date: { type: SchemaTypes.Date, required: true }
};

const collectionName: string = "note";
const noteSchema: Schema = new Schema(schema);

const Note = (conn: Connection): Model<INote> =>
  conn.model(collectionName, noteSchema);

export default Note;
