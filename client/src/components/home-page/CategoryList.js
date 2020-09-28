// Libraries
import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

// Components
import MinMaxTest from './MinMaxTest';

const CategoryList = ({
  available,
  setFilterAvailable,
  min,
  setMin,
  max,
  setMax,
  setCategories,
  setBodyL,
  setPage,
  keyword,
  setKeyword,
}) => {
  const [categoryItems, setCategoryItems] = React.useState(null);
  const [bodyLocations, setBodyLocations] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    fetch('/api/items/categories')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCategoryItems(json);
      })
      .catch(function (error) {
        if (error.status == 404) {
          history.push('/404');
        } else {
          history.push('/technical-issue');
        }
      });

    fetch('/api/items/body_locations')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBodyLocations(json);
      })
      .catch(function (error) {
        if (error.status == 404) {
          history.push('/404');
        } else {
          history.push('/technical-issue');
        }
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
            onChange={() => {
              setFilterAvailable(!available);
              setPage(1);
            }}
          />
          Available Only
        </label>
      </div>
      <MinMaxTest
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
        setPage={setPage}
      />
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
                      setPage(1);
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
                    setPage(1);
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
