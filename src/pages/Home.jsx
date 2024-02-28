import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <section>
            <div>
            <Button variant="primary">HTML</Button>
            <Button variant="primary">CSS</Button>
            <Button variant="primary">JavaScript</Button>
            <Button variant="primary">React</Button>
            <Button variant="primary">MongoDB</Button>
            <Button variant="primary">SQL</Button>
            <Button variant="primary">APIs</Button>
            </div>
        </section>
    )
}

export default Home;