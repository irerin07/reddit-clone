import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette'

const CardItem = (props) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const Cover = styled.div`
        height: 150px;
        width: 100%;
    `;
    const Contents = styled.div`
        flex: 1;
    `
    
    return (
        <Wrapper>
            <Cover>
                <Contents>
                    카드!
                </Contents>
            </Cover>
        </Wrapper>
    );
};

export default CardItem;