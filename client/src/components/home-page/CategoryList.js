// Libraries
import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
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
  bodyL,
  setBodyL,
  keyword,
  setKeyword,
}) => {
  const [categoryItems, setCategoryItems] = React.useState(null);
  const [bodyLocations, setBodyLocations] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/items/categories')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCategoryItems(json);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Search>
        <BiSearch />
        <input
          type="text"
          value={keyword}
          style={{ flex: 1 }}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Search>
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
                <input
                  onClick={(e) => {
                    if (e.target.checked) {
                      setBodyL((n) => [...n, location]);
                    } else {
                      setBodyL((n) =>
                        n.filter((element) => element !== location)
                      );
                    }
                  }}
                  type="checkbox"
                />
                {location}
              </label>
            );
          })}
      </ListWrapper>
    </Wrapper>
  );
};

const Search = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
`;

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
