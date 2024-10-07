import React from 'react';
import Resume from '../Resume/Resume';
import { StyleBoundaryBootstrap } from '../style/StyleBoundaryBootstrap';

const Htwn = () => {
    return (
        <>
            <StyleBoundaryBootstrap>
                <div className={'container'}>
                    <h1>Hello, World</h1>
                    <h2>Hello, World</h2>
                    <h3>Hello, World</h3>
                    <h4>Hello, World</h4>
                    <h5>Hello, World</h5>
                    <h6>Hello, World</h6>
                    <p>Hello, World</p>
                    <a>Hello, World</a>
                    <button className={'btn btn-primary'}>Hello, World!</button>
                </div>
            </StyleBoundaryBootstrap>
            <Resume />
        </>
    );
};

export default Htwn;
