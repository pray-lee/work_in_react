import React from "react";
import {useParams} from 'react-router-dom'
export default () => {
    const params = useParams()
    return (
        <h1>articleDetail {params.id}</h1>
    )
}
