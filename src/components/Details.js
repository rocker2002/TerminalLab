import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategoryDetails, setCategoryDetails } from '../redux/emojiSlice';

const Details = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const selectedCategory = useSelector((state) => state.emoji.selectedCategory);
  const categoryDetails = useSelector((state) => state.emoji.categoryDetails);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchCategoryDetails({ category: selectedCategory }));
    }

    return () => {
      dispatch(setCategoryDetails(null));
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
          <p>Category: {categoryDetails.category}</p>
          <p>Group: {categoryDetails.group}</p>
          <p>HTML Code: {categoryDetails.htmlCode}</p>
          <p>Unicode: {categoryDetails.unicode}</p>
        </div>
      )}
    </div>
  );
};

export default Details;

