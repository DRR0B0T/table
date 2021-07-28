import React from 'react';
import './index.scss';
import axios from 'axios'
import {Dropdown} from "./components/Dropdown";
import {Search} from "./components/Search";
import {Table} from "./components/Table";




export default function App() {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [selected, setSelected] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')

        setIsLoading(false)

        setPosts(postsResponse.data)
        setUsers(usersResponse.data)

      } catch (err) {
        alert('Ошибка получения данных')
        console.error(err)
      }
    }
    fetchData()
  },[])

  const onRemoveItems =(id)=>{
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPosts(prev => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка удаления!')
      console.error(error)
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)

  }


  const findSearchValue = posts.filter(item => {
    if(searchValue === '') {
      return item
    } else if (item.title.toLowerCase().includes(searchValue.toLowerCase())){
      return item
    }
  })

  const filterDropdown = users.filter(item => !posts.includes(item.id))

  console.log(filterDropdown)

  return (
    <div className="App">
     <div className='header'>
       <Dropdown
         users={users}
         posts={posts}
         isLoading={isLoading}
         setPosts={setPosts}
         setSelected={setSelected}
         selected={selected}
       />
       <Search
         posts={posts}
         isLoading={isLoading}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         onChangeSearchInput={onChangeSearchInput}
         findSearchValue={findSearchValue}

       />
     </div>
      <Table
        searchValue={searchValue}
        posts={posts}
        loading={isLoading}
        findSearchValue={findSearchValue}
        onRemoveItems={onRemoveItems}
        selected={selected}
      />
    </div>
  );
}
