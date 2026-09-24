export type CategoryId = "videos" | "music" | "films" | "books";

export interface Category {
  id: CategoryId;
  label: string;
  tagline: string;
}

export interface Mode {
  id: "artists" | "personal" | "mixed";
  label: string;
  desc: string;
}

export const CATEGORIES: Category[] = [
  { id: "videos", label: "Videos", tagline: "Find creators making similar videos in another language." },
  { id: "music", label: "Music", tagline: "Find artists with a similar sound, singing in another language." },
  { id: "films", label: "Films & Shows", tagline: "Find films and shows with a similar feel, in another language." },
  { id: "books", label: "Books", tagline: "Find authors with a similar voice, writing in another language." },
];

export const MODES: Mode[] = [
  {
    id: "artists",
    label: "Artists",
    desc: "Add a few artists (or creators, or authors) you already like and a target language. We'll base recommendations on their genre and style.",
  },
  {
    id: "personal",
    label: "Personal",
    desc: "Connect the apps you already use — like Spotify or Netflix — and a target language. We'll read your listening or viewing habits to recommend from.",
  },
  {
    id: "mixed",
    label: "Mixed",
    desc: "Connect your apps and add specific artists, for the most targeted recommendations of the three modes.",
  },
];