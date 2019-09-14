import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { listPhotos } from "../reducers/PhotosReducer";

const HomePage = ({ listPhotos, datas }) => {
  useEffect(() => {
    listPhotos();
  }, [listPhotos]);

  return (
    <>
      { datas.map((item) => {
        return(
          <p key={item.id}>{ item.title}</p>
        )
      })}
    </>
  )
}

const mapStateToProps = state => {
	return state.photos;
};
const mapDispatchToProps = {
	listPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
