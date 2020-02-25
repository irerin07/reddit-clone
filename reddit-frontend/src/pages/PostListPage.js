import React from 'react';
import Trends from '../components/posts/Trends'
import styled from 'styled-components';

const PostListPage = () => {
    const StyledPostBlock = styled.div`
        min-height: calc(100vh - 64px);
        .list {
            margin-top: 64px;
        }
    `;

    return (
        <StyledPostBlock>
            <div className="list">
                포스트 리스트 확인
            </div>
        </StyledPostBlock>
    );
};

export default PostListPage;