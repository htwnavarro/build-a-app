import styled, { css } from 'styled-components';

export const OpenSans = css`
    font-family: open-sans, sans-serif;
`;

export const COLOR_ACCENT = '#2079c7';
export const COLOR_TEXT_PRIMARY = '#434343';
export const COLOR_TEXT_SECONDARY = '#232b2b';
export const COLOR_TEXT_TERTIARY = '#666666';

export const StyleBoundaryResume = styled.div`
    font-family: 'Merriweather', open-sans;
    color: ${COLOR_TEXT_PRIMARY};

    /**
Typography settings
*/

    h1 {
        font-size: 32pt;
    }

    h2 {
        ${OpenSans};
        font-size: 9pt;
        text-transform: uppercase;
    }

    h3 {
        font-size: 11pt;
        margin: 0;
    }

    h4 {
        font-size: 9pt;
        margin: 0;
    }

    p {
        font-size: 10pt;
        line-height: 1.5;
    }

    h2,
    a {
        margin: 0;
        color: ${COLOR_ACCENT};
    }

    ul {
        margin-top: 0;
        padding-left: 34px;

        li {
            padding-left: 8px;
        }
    }

    // all li that are siblings to an h2

    h2 + ul {
        padding-left: 0;

        li {
            color: ${COLOR_TEXT_TERTIARY};
            list-style: none;
            font-size: 10pt;
            line-height: 1.5;
            margin: 12px 0;
            padding-left: 0;

            &:first-child {
                margin-top: 14px;
            }

            &:last-child {
                margin-bottom: 48px;
            }
        }
    }
`;
