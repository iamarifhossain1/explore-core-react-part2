import './App.css'
import Counter from './Counter'
import Player from './Player'
import Bowler from './Bowler'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'
import Todos from './Todos'


// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())


// const fetchFriends = async () => { 
//   const fetchFriend = await fetch('https://jsonplaceholder.typicode.com/users')
//   const response = await fetchFriend.json()
//   return response;
// }

// const loadPost = async () =>{ 
//   const fetchdData = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const response = await fetchdData.json();
//   return response;
// }


const loadTodos = async () => {
  const fetchTodos = await fetch('https://jsonplaceholder.typicode.com/todos');
  const response = await fetchTodos.json();
  return response;
}


function App() {
  
  const todosPromise = loadTodos();

// const friendsPromise = fetchFriends();

  // const postPromise = loadPost()

  function handleClick() {
    alert('You have clicked me')
  }



const handleClick3 = () => {
  alert('Alert Number 3')
}

const handleNum = (num) => {
  const newNum = num + 5;
  alert(newNum);
}

  return (
    <>
      
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Todos Loading...</h3>}>
        <Todos todosPromise={todosPromise}></Todos>
      </Suspense>

      {/* <Suspense fallback={<h3>Post Loading....</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetch={fetchUser}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are loading.....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Bowler name="Arif Hossain"></Bowler>
      <Player></Player>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('You have clicked me2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={() => alert('click 4') }>Click Me4</button>
      <button onClick={() => handleNum(10)}>Click Add 5</button>
    </>
  )
}

export default App
