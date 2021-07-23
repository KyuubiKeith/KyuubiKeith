// ============================== Dynamic Favicon ===========================================//

(function() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'icon';
  link.href = 'Assets/Images/Brand_Identity/Favicon/favicon.svg';
  document.getElementsByTagName('head')[0].appendChild(link);
})();

// ============================== Dynamic Favicon ===========================================//


// ================================== Imports ===========================================//

// import './BlerdCorps.scss'

import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import { Helmet } from "react-helmet";

// ================================== Imports ===========================================//


// ================================== Content Fetch ===========================================//

const query = `
{
  projectsCollection {
    items {
      projectName
      client
      workDone
      caseStudy{
        json
      }
    }
  }
}
`
// ================================== Content Fetch ===========================================//



// ================================ Page Render ===========================================//

function Capsule(){

  // define the initial state
  const [content, setContent] = useState(null);

  // perform fetch request and set returned data
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/umcw8gxtez17/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer yKdJNPcKOFNqD6EnieYGqY1gS8Wts2ZnMZNOGjW6QDU",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setContent(data.projectsCollection.items[0]);
      });
  }, []);




  // show a loading screen case the data hasn't arrived yet
  if (!content) {
    return "Loading...";
  }

  return(
    <>
    
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Music Studio Where All Your Dreams Come True" />
      </Helmet>

      <h1>{content.projectName}</h1>
      <h1>{content.client}</h1>
      <h1>{content.workDone}</h1>
      <h1>{documentToReactComponents(content.caseStudy.json)}</h1>
      
      
    </>
  );
}

ReactDOM.render(

  <Capsule />,

  document.getElementById('📦')
);

// ================================ Page Render ===========================================//
