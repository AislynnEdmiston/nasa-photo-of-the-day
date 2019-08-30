import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Description() {

    const [photo, setPhoto] = useState({
        copyright: "",
        date: "",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: ""
    })


    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=6MRyIjmkiONtrh1WMAkJefJojEuZGFIflj59tLl5')
            .then(res => {
                console.log(res.data)
                setPhoto(res.data)
            })
            .catch(err => console.log(err))
    }, [])  

    return (
        <div>
            <p>{photo.explanation}</p>
        </div>
    )
}

export default Description