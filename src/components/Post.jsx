import React from "react";
import { useQuery } from 'react-query'

const fetcher = url => fetch(url).then( res => res.json())

const Post = ({ postID, goBack }) => {

    const { data } = useQuery('post', 
    () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`))

    console.log(postID)

    return <div>
        <h1><b>{ data.title } </b></h1>
        <p>{ data.body }</p>
        <button onClick={goBack}>go back</button>
    </div>
}

export default Post