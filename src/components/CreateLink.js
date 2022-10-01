import React from 'react'
import sanitizeHtml from 'sanitize-html';

export default function CreateLink({ text, slug }) {

    const convertToSlug = (text) => {
        return sanitizeHtml(text
            .toLowerCase()
            .replace(/\./g, '/')
            .replace(/ +/g, '-')
        ).replace(/&/g, '')
        .replace(/;/g, '')
    }


    return (
        <div><a href={convertToSlug(slug)}> {text}</a></div>
    )
}
