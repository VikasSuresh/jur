import React from 'react';
import { Nav } from '../../Component';
import './index.css';

const Home = () => (
    <div>
        <Nav />
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 pad" style={{ height: '100vh', background: '#f4f5fa' }}>
                    <h3>Let&apos;s Start</h3>
                    <p>
                        {`LLorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    </p>
                </div>
                <div className="col-8 center">
                    <button type="button" className="btn btn-primary">Let&apos;s Start</button>
                </div>
            </div>
        </div>

    </div>
);

export default Home;
