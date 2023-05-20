import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-3'>
            <div className='blog-container'>
                <h3 className='font-medium text-xl mb-2'>Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>Answer: Access tokens help users get the resources they need to complete their tasks and refresh token helps to get another access token if previous access token get expired. We should store them in cookies. </p>
            </div>
            <div className='blog-container'>
                <h3 className='font-medium text-xl mb-2'>Q2. Compare SQL and NoSQL databases?</h3>
                <p>Answer: SQL is fixed but NoSQL is dynamic. SQL is not suitable for hierarchical data storage but NoSQL is suitable for it. SQL is good for complex queries NoSql isn't.</p>
            </div>
            <div className='blog-container'>
                <h3 className='font-medium text-xl mb-2'>Q3. What is express js? What is Nest JS?</h3>
                <p>Answer: Node is an open-source, runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. Expres JS is a Node.js framework.</p>
            </div>
            <div className='blog-container'>
                <h3 className='font-medium text-xl mb-2'>Q4. What is MongoDB aggregate and how does it work?</h3>
                <p>Answer: MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blogs;