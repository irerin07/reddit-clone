import React from 'react';
import styled from 'styled-components';
import Card from './CardItem'

const CardList = () => {
    const MainContainer = styled.div`
        margin-top:64px;
        padding:20px;
    `;
    const CardWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    const CardListWrapper = styled.div`
        flex-basis: 25%;
        padding-left:8px;
        padding-right:8px;
    `;

    return (
        <>
            <MainContainer>
                <h3>PostList</h3>
                <CardWrapper>
                    <CardListWrapper>
                        <Card />
                    </CardListWrapper>
                </CardWrapper>
            </MainContainer>
        </>
    );
};

export default CardList;