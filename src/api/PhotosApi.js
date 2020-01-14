import { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../const/Api';
import { PHOTOS } from "../const/ActionTypes";
import { useDispatch } from 'react-redux';

const ReqAddPhoto = (payload) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isDone, setIsDone ] = useState(false);
  if(isDone)
    setIsDone(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (payload.title === '') return
    if (payload.sent === true) {
      setIsDone(false);
      setIsLoading(true);
      // api request just for sample
      axios(`${API.PHOTOS}/1`).then((res) => {
        dispatch({ type: PHOTOS.ADD, payload })
        setIsLoading(false);
      }).catch((e) => {
        setIsLoading(false);
      });
      setIsDone(true);
    }
    // eslint-disable-next-line
  }, [payload.sent, payload.title]);

  return { isLoading, isDone };
};

const ReqRemovePhoto = (payload) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (payload.id > 0) {
      setIsLoading(true);
      // api request just for sample
      axios(`${API.PHOTOS}/${payload.id}`).then((res) => {
        dispatch({ type: PHOTOS.DELETE, payload })
      }).catch((e) => {
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [payload.id]);

  return isLoading;
};

export { ReqAddPhoto, ReqRemovePhoto };
