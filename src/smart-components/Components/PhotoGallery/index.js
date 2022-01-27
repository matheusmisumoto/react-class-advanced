import React, { memo, useState } from "react";
import Button from "../../../dumb-components/Components/Button"; // Dumb Component

function PhotoGallery(props) {

    const { photos } = props;

    const [gallery, setGallery] = useState(photos);

    const handleRemove = (key) => {
        const newGallery = gallery.filter((img, index) => index !== key);
        setGallery(newGallery);
    }

    const renderPhotos = (img, key) => {
        return (
            <div key={key}>
                <img src={img} alt="" />
                <Button onClick={() => handleRemove(key)}>Remove photo</Button>
            </div>
        )
    }

    return(
        <>
            {gallery.map(renderPhotos)}
        </>
    )
    
}

export default memo(PhotoGallery)