// MarkdownViewer.js
import React, { useState, useEffect } from "react";

export const MarkdownViewer = () => {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        // Fetch and set the Markdown content when this component mounts
        async function fetchMarkdownContent() {
            try {
                const response = await fetch("/src/pages/portfolio/azure-landing-zones/azure-landing-zones.md");
                const text = await response.text();
                setMarkdownContent(text);
            } catch (error) {
                console.error("Error fetching Markdown content:", error);
            }
        }

        fetchMarkdownContent();
    }, []);

    return (
        <div>
            <h2>Markdown Content</h2>
            <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
        </div>
    );
};
