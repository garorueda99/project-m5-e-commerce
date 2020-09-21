// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import MinMaxTest from './MinMaxTest';
const CategoryList = ({
  available,
  setFilterAvailable,
  min,
  setMin,
  max,
  setMax,
  categories,
  setCategories,
}) => {
  const [categoryItems, setCategoryItems] = React.useState('');
  const [bodyLocations, setBodyLocations] = React.useState('');
  const Checkbox = (category) => {
    return (
      <input
        onChange={(c) => {
          setCategories(category);
          console.log(category);
        }}
        type="checkbox"
      />
    );
  };

  React.useEffect(() => {
    fetch('/api/items/categories')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCategoryItems(json);
        console.log(categoryItems);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch('/api/items/body_locations')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBodyLocations(json);
        console.log(bodyLocations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <div>
        <label>
          <input
            type="checkbox"
            checked={available}
            onChange={() => setFilterAvailable(!available)}
          />
          Available Only
        </label>
      </div>
      <MinMaxTest min={min} setMin={setMin} max={max} setMax={setMax} />
      <h4>Categories</h4>
      <ListWrapper>
        {categoryItems &&
          categoryItems.map((category, index) => {
            return (
              <CategoryItem key={`cat-${index}`}>
                <label>
                  <input
                    onClick={(e) => {
                      if (e.target.checked) {
                        setCategories((n) => [...n, category]);
                      } else {
                        setCategories((n) =>
                          n.filter((element) => element !== category)
                        );
                      }
                    }}
                    type="checkbox"
                  />
                  {category}
                </label>
              </CategoryItem>
            );
          })}
      </ListWrapper>
      <h4>Body Locations</h4>
      <ListWrapper>
        {bodyLocations &&
          bodyLocations.map((location, index) => {
            return (
              <label key={`loc-${index}`}>
                <Checkbox />
                {location}
              </label>
            );
          })}
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 250px;
  padding: 0px 15px 10px 10px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const CategoryItem = styled.div``;

export default CategoryList;
