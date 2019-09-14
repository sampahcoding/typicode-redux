import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { listPhotos } from "../reducers/PhotosReducer";
import Item from "../components/Item";
import AddItem from "../components/AddItem";

const HomePage = ({ listPhotos, photos, loading }) => {
  useEffect(() => {
    listPhotos();
  }, [listPhotos]);
  console.log('render page');
  return (
    <>
      <AddItem/>
      { photos.map((item) => <Item data={item} key={item.id}/>)}
    </>
  )
}

const mapStateToProps = state => {
	return {
    photos: state.photos.datas,
    loading: state.photos.progress,
    error: state.photos.error,
  }
};
const mapDispatchToProps = {
	listPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
