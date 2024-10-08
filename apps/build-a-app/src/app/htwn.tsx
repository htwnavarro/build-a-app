import React from 'react';
import Resume from '../Resume/Resume';
import { StyleBoundaryBootstrap } from '../style/StyleBoundaryBootstrap';
import Navigation from '../Navigation';
import styled, { css } from 'styled-components';

const TextExtraLarge = css`
    font-size: calc(1.4rem + 1.8vw);
    @media (min-width: 1200px) {
        font-size: 3rem;
    }
`;

const H2ExtraLarge = styled.h2`
    ${TextExtraLarge};
`;

const Htwn = () => {
    return (
        <>
            <StyleBoundaryBootstrap>
                <Navigation />
                <div
                    className={
                        'container-fluid text-light d-flex flex-row align-items-center justify-content-center'
                    }
                    style={{ minHeight: '33vh' }}
                >
                    <H2ExtraLarge>Meet the Engineer</H2ExtraLarge>
                </div>
            </StyleBoundaryBootstrap>
            <Resume />
        </>
    );
};

export default Htwn;
