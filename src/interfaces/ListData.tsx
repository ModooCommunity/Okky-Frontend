// 데이터 타입

//POST 요청, PATCH 응답
export interface questionPostData {
  topic: string;
  title: string;
  content: string;
}

//PATCH 요청
export interface questionPatchData {
  topic: string;
  title: string;
  content: string;
}

//GET 요청
export interface questionGetData {
  nickname: string;
  title: string;
  content: string;
  viewCount: number;
  comments: Comment[];
}

//Comment 객체
interface Comment {
  nickname: string;
  review: string;
}

