import React, { useState, useEffect } from "react";
import Header from "./header";
import Custom from "./Custom";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import User from "./user";
import { useQuery } from 'react-query'
import Post from "./Post";

// let age = 2
// let globalID = 0

// function App() {

//     const [todos, setTodo] = useState([])
//     const [task, setTask] = useState('')

//     function createTodo(event) {
//         event.preventDefault()

//         setTodo(oldtodos => {
//             setTask('') 
//             return [...todos, {todo: task, id: globalID++}]
//         })
//     }

//     function deleteItem(itemID) {
//         setTodo(oldtodos => oldtodos.filter(item => item.id !== itemID ))
//     }

//     return (
//         <div>
//             <Header />
//             <div>
                
//                 <form onSubmit={createTodo}>
//                     <input 
//                     type="text" 
//                     value={task} 
//                     onChange={event => {
//                         setTask(event.target.value)
//                     }}/>
//                     <button type="submit">ADD</button>
//                 </form>

//                 <ul>
//                     {todos.map((item, index) => {
//                         return <div>
//                             <li key={item.id}>{item.todo}</li>
//                             <button onClick={() => deleteItem(item.id)}>Delete</button>
//                         </div>
//                     })}
//                 </ul>

//             </div>
//         </div>
//     )
// }

// export default App

const fetcher = url => fetch(url).then( res => res.json())

// function Button() {

//     const {data, error} = useQuery('hello-world', () => {
//         return new Promise(resolve => {
//             setTimeout(() => resolve(1337), 1000)
//         })
//     })

//     console.log({data, error})

//     return <button>I am a button {data}</button>

// }

function App() {
    // return (
    //     <BrowserRouter>
    //         <ul>
    //             <li><Link to="/hello-world">Go to hello world</Link></li>
    //             <li><Link to="/chgiee">go to home</Link></li>
    //             <li><Link to="/user/Agrim">go to user</Link></li>
    //             <li><Link to="/user/mehul">go to user</Link></li>
    //             <li><Link to="/user/Akshat">go to user</Link></li>
    //         </ul>

    //         <Routes>
    //             <Route path="/hello-world" exact element={<Header />} />
    //             <Route path="/chgiee" exact element={<Custom />} />
    //             <Route path="/user/:username" exact element={<User />} />
    //         </Routes>
            
    //         <h3>I am just an h3</h3>
    //     </BrowserRouter>
    // )

    const [x, setX] = useState(false)
    // const [visible, setVisible] = useState(true)

    // function toggleButton() {
    //     setVisible(visible => !visible)
    // }

    const [repoName, setReponame] = useState("")
    const [postId, setPostid] = useState(null)

    console.log(repoName)
    const { isLoading, data: posts } = useQuery('post', 
    () => fetcher('https://jsonplaceholder.typicode.com/posts'), {
        select: result => result.slice(0, 10)
    })

    if (postId !== null) {
        console.log(postId)
        return <Post postID={postId} goBack={() => setPostid(null)} />
    }

    if (isLoading) {
        return <div className="App">
            <h2>is loading</h2>
        </div>
    }

    return (
        <div className="App">
            <div>
                {posts.map(post => {
                    return <div>
                        <h1><a href="#" onClick={() => setPostid(post.id)}>{post.id} - {post.title}</a></h1>
                    </div>
                }) }
                
            </div>
        </div>
        // <div className={x ? 'dark' : ''} onClick={() => setX(x => !x)}>
        //     <div className="dark:bg-gray-900 dark:text-white">
                /* <p className="dark:text-3xl">
                    shhsdfohaofhasihfosdhfioashofh fsafhsaofhasohfoaiw shf
                </p>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1> */

                /* {visible && <Button />} */
                /* <button className="bg-grey-200" onClick={toggleButton}>toggle</button> */
    )    
}

export default App 