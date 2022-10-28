import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='mt-3'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why this website created?</Accordion.Header>
                    <Accordion.Body>
                        The Website is created for online education perpouse
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Is there any business perpouse?</Accordion.Header>
                    <Accordion.Body>
                        Yes! This is a business website also, But we provide some free courses sometimes based on the Students Analytics
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Can we get any schollership?</Accordion.Header>
                    <Accordion.Body>
                        Yes, We Provide 100 + scholership to our students based on Inteligence and poority
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;