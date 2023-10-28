import { atom, selector } from "recoil";

export enum Categories {
  "question",
  "community"
}

export interface mainDataI {
  // TokenData의 형태를 지정합니다.
  qna_data: {
    id: number;
    title: string;
    nickname: string;
    view_count: number;
    comment_count: number;
    created_at: Date;
    category: Categories.question;
  }[];
  community_data: {
    id: number;
    title: string;
    nickname: string;
    view_count: number;
    comment_count: number;
    created_at: Date;
    category: Categories.community;
  }[];
}

export interface cateDataI {
    id: number;
    title: string;
    nickname: string;
    view_count: number;
    comment_count: number;
    created_at: Date;
    category: Categories;
}

export const mainState = atom<mainDataI>({
  key: "mainList",
  default: {
    qna_data: [],
    community_data: []
  }
});

export const mainSelector = selector({
  key: "mainSelector",
  get: ({ get }) => {
    const cateLists = get(mainState);
    return {
      qna_data: cateLists.qna_data,
      community_data: cateLists.community_data
    };
  },
});