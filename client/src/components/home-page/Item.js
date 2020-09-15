import React from 'react';
import styled from 'styled-components';

const Item = (props) => {
    const data = props.data;
    console.log(data);
    return (
        <Wrapper>
            <h3>{data.name}</h3>
            <img src={data.imageSrc} />
        </Wrapper>
    )
};

export default Item;

const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid lightgrey;
    border-radius: 15px;
    padding: 20px;
`