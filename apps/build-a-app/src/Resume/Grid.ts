import styled, { css } from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: fit-content(505px) max-content;
    grid-template-rows: min-content;
    grid-template-areas:
        'title contact'
        'summary skills'
        'experience lang';
    grid-gap: 32px;
    justify-content: center;
`;

export const GridArea = (areaDefinition: string) => css`
    grid-area: ${areaDefinition};

    & *:first-child {
        margin-top: 0;
    }

    & *:last-child {
        margin-bottom: 0;
    }
`;
