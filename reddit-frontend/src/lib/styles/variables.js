import styled from 'styled-components';

// Media query size

const screenSize = {
    Mobile: '480px',
    Laptop: '1200px'
}

export const device = {
    Mobile:`(min-width: ${screenSize.Mobile})`,
    Laptop:`(min-width: ${screenSize.Laptop})`
}

