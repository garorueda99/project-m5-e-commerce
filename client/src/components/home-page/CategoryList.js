import React from 'react';
import styled from 'styled-components';

const CategoryList = () => {
    const [categoryItems, setCategoryItems] = React.useState('');
    const [bodyLocations, setBodyLocations] = React.useState('');

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
        <>
            <h4>Categories</h4>
            <ListWrapper>
                {categoryItems &&
                    categoryItems.map(category => {
                        return (
                            <CategoryItem>
                                <label>
                                    <Checkbox />
                                    {category}
                                </label>
                            </CategoryItem>
                        )
                    })
                }
            </ListWrapper>
            <h4>Body Locations</h4>
            <ListWrapper>
                {bodyLocations &&
                    bodyLocations.map(location => {
                        return (
                            <label>
                                <Checkbox />
                                {location}
                            </label>
                        )
                    })
                }
            </ListWrapper>
        </>
    )
}

const Checkbox = () => {
    return <input type="checkbox" />
}

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`

const CategoryItem = styled.div`
`

export default CategoryList;