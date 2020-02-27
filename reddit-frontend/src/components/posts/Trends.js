import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette'


const TrendWidget = () => {
    const StyledWidgetWrapper = styled.div`
        border-radius:2px;
        max-width: 375px;
        min-width: 208px;
        flex: 1;
        background: ${palette.gray[5]};
    `;

    return (
        <StyledWidgetWrapper>

        </StyledWidgetWrapper>
    );
};

export default TrendWidget;