import axios from 'axios';
import Search from 'pages/Search';
import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {

  const { register, handleSubmit, reset } = useForm();
  const history = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const searchArea = data.searchArea;
    const searchValue = data.search;

    let url = "";

    switch (searchArea) {
      case "title":
        url = `/search?title="${searchValue}"`;
        break;
      case "content":
        url = `/search?content="${searchValue}"`;
        break;
      case "keyword":
        url = `/search?keyword="${searchValue}"`;
        break;
      default:
        url = "/search";
    }
  
    history(url);
    reset();

  };

  return (
    <li>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select id="" {...register("searchArea")}>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="keyword">제목 + 내용</option>
        </select>
        <input type="text" placeholder='검색영역' {...register("search")} />
      </form>
    </li>
  )
}

export default SearchInput
