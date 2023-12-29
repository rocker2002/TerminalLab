import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategories, selectCategory } from '../redux/emojiSlice';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const categories = useSelector((state) => state.emoji.categories);

  useEffect(() => {
    axios.get('https://emojihub.yurace.pro/api/category')
      .then((response) => {
        dispatch(setCategories(response.data));
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    history.push('/details');
  };

  return (
    <div>
      <h1>Emoji Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
