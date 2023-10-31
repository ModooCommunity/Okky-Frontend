import { atom, selector } from "recoil";

export enum Categories {
  "question" = "question",
  "community" = "community"
}

export interface CategoryData {
  id: number;
  title: string;
  nickname: string;
  viewCount: number;
  commentCount: number;
  createdAt: Date;
  category: Categories;
}

export interface CategoryData {
  id: number;
  title: string;
  nickname: string;
  viewCount: number;
  commentCount: number;
  createdAt: Date;
  category: Categories;
}

export interface mainDataI {
  qnaData: CategoryData[];
  communityData: CategoryData[];
}

export interface cateDataI {
  qnaData: CategoryData[];
  communityData: CategoryData[];
}

export const mainState = atom<mainDataI>({
  key: "mainList",
  default: {
    qnaData: [],
    communityData: []
  }
});

export const cateState = atom<cateDataI>({
  key: "cateList",
  default: {
    qnaData: [],
    communityData: []
  }
});

export const mainSelector = selector({
  key: "mainSelector",
  get: ({ get }) => {
    const cateLists = get(mainState);
    return {
      qna_data: cateLists.qnaData,
      community_data: cateLists.communityData
    };
  },
});

export interface SearchProps {
  searchResult: CategoryData[];
}