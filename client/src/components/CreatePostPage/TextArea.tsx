import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..';
import { setContent } from '../../store/createPostSlice';

function TextArea() {
  const { content } = useSelector((state: RootState) => state.createPost)
  const [textArea, setTextArea] = useState(content);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   console.log("text area==", textArea);
  //   console.log("content update 완료 =>", content)
  // }, [content, textArea]);

  const changeContent = (event: any) => {
    setTextArea(event.target.value);
  
  }
  const insertContent = () => {
    dispatch(setContent(textArea));
  }
  
  return (
    <textarea className='createpost_content_textarea' placeholder='내용을 입력해주세요' value={textArea} onChange={(event) => changeContent(event)} onBlur={()=> insertContent()}/>
  )
}


export default TextArea