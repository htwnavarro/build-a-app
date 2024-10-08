import React from 'react';

const Navigation = () => {
    return (
        <header className="p-3 sticky-top text-bg-light">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
                    <ul className="nav col-12 col-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="#" className="nav-link px-2 text-black">
                                Playground
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="nav-link px-2 text-secondary"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
