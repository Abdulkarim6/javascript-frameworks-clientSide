import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='mt-3'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        “CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.

                        It enables JavaScripts running in browsers to connect to APIs and other web resources like fonts, and stylesheets from multiple different providers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <strong> we use firebase for :</strong>
                        <p>
                            Firebase helps our develop high-quality apps, grow our user base, and earn more money. Each feature works independently, and they work even better together.
                        </p>
                        <strong>Firebase alternatives :</strong>
                        <p>
                            Back4App, Backendless, Kuzzle, Pubnub, Kumulos, Appwrite, Deployd, NHost
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        <strong>What is Node?</strong>
                        <p>
                            As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. on this many connections can be handled concurrently. Upon each connection, the callback is fired.
                        </p>
                        <strong>How does Node work?</strong>
                        <p>
                            Node.js is the JavaScript runtime environment which is based on Google’s V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;