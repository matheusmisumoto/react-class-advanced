import React from "react";
import PhotoGallery from "./Components/PhotoGallery";


function SmartComponents() {
    const photos = [
        'https://placeimg.com/140/60/tech',
        'https://placeimg.com/140/60/architecture',
        'https://placeimg.com/140/60/animals',
        'https://placeimg.com/140/60/people'
    ];

    return(
        <>
            <h1>Photo Gallery</h1>
            <PhotoGallery photos={photos} />
        </>
    )
}

export default SmartComponents