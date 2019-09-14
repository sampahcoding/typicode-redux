import React, { useState, useEffect, useRef } from "react";
import AddItem from "../components/AddItem";
import { ReqRemovePhoto } from "../api/PhotosApi";

const Item = ({ data, removePhoto }) => {
  const init = useRef(true);
  const [ val, setVal ] = useState(data.title);
  const [ removedId, setRemovedId ] = useState(0);
  const [ isEdit, setIsEdit ] = useState(false);

  const onRemoved = ReqRemovePhoto({ id: removedId });
  const remove = () => setRemovedId(data.id);
  const edit = () => {
    setIsEdit(true);
  };
  const change = () => setVal('Value has change from child components');
  console.log('render item');

  useEffect(() => {
    if(init.current) init.current = false;
    else {
      setIsEdit(false);
      setVal(data.title);
    }
  }, [data.title]);

  return(
    <p style={{ color: onRemoved ? 'grey': 'black'}}>
      {
        isEdit ?
          <AddItem data={data}/>
          :
          val
      }
      <span> </span>
      <button
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => remove()}
      >
        delete
      </button>
      <span> </span>
      <button
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => change()}
      >
        change val
      </button>
      <span> </span>
      <button
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => edit()}
      >
        edit
      </button>
    </p>
  )
}

export default React.memo(Item);
