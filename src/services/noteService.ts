import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const noteInstance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalNotes: number;
  totalPages: number;
  currentPage: number;
}

export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  search: string = "",
): Promise<FetchNotesResponse> => {
  const { data } = await noteInstance.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, search },
  });
  return data;
};

export const createNote = async (note: {
  title: string;
  content: string;
  tag: NoteTag;
}): Promise<Note> => {
  const { data } = await noteInstance.post<Note>("/notes", note);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await noteInstance.delete<Note>(`/notes/${id}`);
  return data;
};
