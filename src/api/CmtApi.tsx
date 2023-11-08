import axios from "axios";

export const postReview = async () => {
  try{
    const response = await axios.post('/review/{question-id}', {
      review: '리뷰입니다',
    });
    console.log('리뷰 전송 성공', response.data);
  } catch(error) {
    console.log(error);
  }
}

export const updateReview = async () => {
  try {
    const response = await axios.patch('/review/{review-id}', {
      review: '수정된 리뷰 내용입니다.',
    });
    console.log('데이터가 성공적으로 업데이트되었습니다:', response.data);
  } catch (error) {
    console.error('데이터를 업데이트하는 중 오류가 발생했습니다:', error);
  }
}

export const deleteReview = async () => {
  try{
    const response = await axios.delete('/review/{review-id}');
    console.log('리뷰 전송 성공', response.data);
  } catch(error) {
    console.log(error);
  }
}