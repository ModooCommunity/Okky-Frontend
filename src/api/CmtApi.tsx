import axios from "axios";

//세션스토리지에 있는 accessToken 가져오기
const token = sessionStorage.getItem('accessToken');
const apiURL = 'http://localhost:4000'
console.log(token);

export const getReviewById = async (reviewId: string) => {
  try {
    const response = await axios.get(`${apiURL}/review/${reviewId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching review:', error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
}

export const postReview = async () => {
  try{
    const response = await axios.post(`${apiURL}/review/{question-id}`, {
      review: '리뷰입니다',
    });
    console.log('리뷰 전송 성공', response.data);
  } catch(error) {
    console.log(error);
  }
}

export const updateReview = async () => {
  try {
    const response = await axios.patch(`${apiURL}/review/{review-id}`, {
      review: '수정된 리뷰 내용입니다.',
    });
    console.log('데이터가 성공적으로 업데이트되었습니다:', response.data);
  } catch (error) {
    console.error('데이터를 업데이트하는 중 오류가 발생했습니다:', error);
  }
}

export const deleteReview = async () => {
  try{
    const response = await axios.delete(`${apiURL}/review/{review-id}`);
    console.log('리뷰 전송 성공', response.data);
  } catch(error) {
    console.log(error);
  }
}