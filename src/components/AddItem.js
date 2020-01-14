import React, { useRef, useEffect, useState } from "react";
import { ReqAddPhoto } from "../api/PhotosApi";


const AddItem = ({ data }) => {
  const inputRef = useRef();
  const [ inputVal, setInputVal ] = useState('');
  const [ status, sent ] = useState(false);
  const id = data ? data.id : 0;
  const { isLoading, isDone } = ReqAddPhoto({
    title: inputVal,
    type: data ? 'EDIT' : 'ADD',
    id: id,
    sent: status,
  });

  const Update = () => {
    setInputVal(inputRef.current.value);
    sent(true);
  };

  useEffect(() => {
    inputRef.current.value= data ? data.title : '';
  }, [data, isDone]);

  return(
    <>
      <input ref={inputRef} style={{ width: '350px' }} disabled={isLoading}/>
      <button onClick={() => Update()} disabled={isLoading}>{ data ? 'Edit' : 'Add'}</button>
    </>
  )
}

export default React.memo(AddItem);
