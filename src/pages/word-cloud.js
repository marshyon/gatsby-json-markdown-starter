import React from "react"
import JSONData from "../../content/file_index.json"
import CreateLink from "../components/CreateLink";

const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/\./g,'/')
    .replace(/ +/g,'-')
    ;
}

const createLink = (text, slug) => {
  return `<a href="/${slug}">${text}</a>`;
}

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>all records</h1>
    {JSONData.map((data, index) => {
      return (
        <>
          <ul>
          <li key={`content_item_${index}`}>name : {data.documentName}</li>
          <li key={`content_item_${index}`}>slug : {convertToSlug(data.documentName)}</li>
          <li key={`content_item_${index}`}>title : {data.title}</li>
          <li key={`content_item_${index}`}>link : <CreateLink text={data.title} slug={data.documentName}/></li>

          {/* <li key={`content_item_${index}`}>link : {createLink(data.title, convertToSlug(data.documentName))}</li> */}
          
          <li key={`content_item_${index}`}>desc : {data.desc}</li>
          <li key={`content_item_${index}`}>excerpt : {data.excerpt}</li>
          <li key={`content_item_${index}`}>created : {data.created}</li>
          <li key={`content_item_${index}`}>updated : {data.updated}</li>
          <li key={`content_item_${index}`}>level : {data.level}</li>
          <li key={`content_item_${index}`}>descendants : {data.descendants}</li>
          <li key={`content_item_${index}`}>children : {  JSON.stringify(data.children)  }</li>


          </ul>
        </>
      )
    })}
  </div>
)
export default JSONbuildtime