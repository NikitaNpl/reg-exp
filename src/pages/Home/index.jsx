import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, MainBlock } from '../../components/index';
import { fetchRegExp } from '../../redux/actions/regExp';
import { fetchCategories } from '../../redux/actions/categories';

function Home() {
  const dispatch = useDispatch();
  const { items, regExpIsLoaded } = useSelector(({ regExp }) => regExp);
  const { categories, categoriesIsLoaded } = useSelector(({ categories }) => categories);

  React.useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchRegExp());
  }, []);

  return (
    <>
      <Categories
        items={categories}
        isLoaded={categoriesIsLoaded}
      />
      <MainBlock
        items={items}
        isLoaded={regExpIsLoaded}
      />
    </>
  )
}

export default Home;
