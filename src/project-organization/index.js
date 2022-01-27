import React from "react";

function ProjectOrganization(props) {

    const folders = [
        "Components: Contains all the components organized by folders. Contains an index.js importing them all",
        "Assets: all global files (css, images)",
        "Commons: useful resources, system constants, internationalization",
        "Routes: system routes",
        "Resources: API service requests",
        "_tests_: used inside any folder to test a specific file",
        "Routes: all the routes of the application",   
    ]

    const buildList = (text, key) => <li key={key}>{text}</li>


    return(
        <>
            <h1 className="mb-3">Project Organization Suggestion</h1>
            Folder structure: 
            <ul>
                {folders.map(buildList)}
            </ul>
        </>
    )
    
}

export default ProjectOrganization