import React, { useEffect, useState } from 'react';

function PortfolioPage(props) {

    const [photos, setPhotos] = useState([]);
    const [Photo, setPhoto] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => setPhotos(photos))
    }, [])

    const ButtonClick = (photo) => {
        setPhoto(photo);
    }

    return (
        <div>
            <h1>portfolio page</h1>

            <div style={{display: 'flex'}}>
                <div>
                    {
                        photos.slice(0, 10).map(photo =>
                            <div>
                            <img src={photo.url} alt=""/>
                            <p>{photo.title}</p>
                            <button onClick={() => ButtonClick(photo)}>узнать url</button>
                            <p>------------------------------------------</p>
                            </div>)
                    }
                </div>
                {Photo && (
                    <div>
                        <h2>Url картинки: </h2>
                        <p>{Photo.url}</p>
                    </div>
                )}
            </div>

        </div>
    );
}

export default PortfolioPage;