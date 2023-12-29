import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategoryDetails, setCategoryDetails, selectEmoji } from '../redux/emojiSlice';
//import axios from 'axios';

const Details = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const selectedCategory = useSelector((state) => state.emoji.selectedCategory);
  const categoryDetails = useSelector((state) => state.emoji.categoryDetails);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchCategoryDetails(selectedCategory));
    }

    return () => {
      dispatch(setCategoryDetails(selectEmoji));
    };
  }, [dispatch, selectedCategory]);

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>{selectedCategory} Details</h1>
      <button onClick={handleBackClick}>Back</button>
      {categoryDetails && (
        <div>
          {}
          {}
          <p>Views: {categoryDetails.views}</p>
          {}
        </div>
      )}
    </div>
  );
};

export default Details;
