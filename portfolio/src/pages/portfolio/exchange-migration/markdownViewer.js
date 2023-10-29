// App.js

import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';

import '../style.css';

export const MarkdownViewer = () => {
    const file_name = 'azure-landing-zones.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./markdown/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}