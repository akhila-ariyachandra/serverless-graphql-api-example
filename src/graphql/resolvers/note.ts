import mongoose from "mongoose";
import dayjs from "dayjs";
import NoteModel, { INote } from "../../database/models/note";
import { ApolloError } from "apollo-server-micro";

export default {
  Query: {
    getAllNotes: async (
      parent,
      args,
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<INote[]> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      let list: INote[];

      try {
        list = await Note.find().exec();
      } catch (error) {
        console.error("> getAllNotes error: ", error);

        throw new ApolloError("Error retrieving all notes");
      }

      return list;
    },

    getNote: async (
      parent,
      { _id }: { _id: INote["_id"] },
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<INote> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      try {
        const note = await Note.findById(_id).exec();

        return note;
      } catch (error) {
        console.error("> getNote error: ", error);

        throw new ApolloError("Error retrieving all notes");
      }
    },
  },

  Mutation: {
    saveNote: async (
      parent,
      { title, content }: { title: INote["title"]; content: INote["content"] },
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<INote> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      try {
        const note = await Note.create({
          title,
          content,
          date: dayjs().toDate(),
        });

        return note;
      } catch (error) {
        console.error("> saveNote error: ", error);

        throw new ApolloError("Error creating note");
      }
    },

    deleteNote: async (
      parent,
      { _id }: { _id: INote["_id"] },
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<INote> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      try {
        const note = await Note.findByIdAndDelete(_id).exec();

        return note;
      } catch (error) {
        console.error("> getNote error: ", error);

        throw new ApolloError("Error retrieving all notes");
      }
    },
  },
};
