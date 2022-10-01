'use strict';

const fs = require('fs');
const Handlebars = require('handlebars');
const sanitizeHtml = require('sanitize-html');
const dir = '../../src/markdown-pages'

const sanitize = (str) => {
    return sanitizeHtml(str)
    .replace(/\./g, "/")
    .replace(/ +/g, "-")
    .replace(/&/g, "")
    .replace(/;/g, "")
}



const create_file = (file, data) => {
    console.log(data.title)
    const source = `---
slug: /{{slug}}
title: {{{title}}}
desc: {{desc}}
updated: {{updated}}
created: {{created}}
---
{{excerpt}}
`;
    const template = Handlebars.compile(source);

    const contents = template({ 
        title: data.title,
        desc: data.desc,
        updated: data.updated,
        created: data.created,
        excerpt: data.excerpt,
        id: data.id,
        slug: sanitize(file)
 
    });

    fs.writeFile(`${dir}/${file}.md`, contents, err => {
        if (err) {
            return console.error(`Autsch! Failed to store template: ${err.message}.`);
        }

        // console.log('Saved template!');
    })
}




let rawdata = fs.readFileSync('/home/jon/projects/gatsby-YAML-JSON-at-buildtime/content/file_index.json');
let indexData = JSON.parse(rawdata);

indexData.forEach((item) => {
    // console.log(item.documentName);
    create_file(item.documentName, item);
})

// console.log(indexData);
