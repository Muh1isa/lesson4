import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Header from './components/Header'
import Main from './components/Main'
import Signin from './components/Signin'

const url = 'https://fakestoreapi.com/products'

const getLocalStorage = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
}


function App() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  
  const [modal, setModal] = useState(false)

  const [name, setName] = useState('')
  const [psw, setPsw] = useState('')
  const [user, setUser] = useState(getLocalStorage)

  const handSignIn = (e) => {
    e.preventDefault() 
    const newUser = {user : name, password : psw}
    setUser([newUser])
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])


  const fetchData = async () => {
    setLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setList(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const removeCard = (id) => {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  useEffect(() => {
    fetchData()
  }, [])

 

  if(loading) return <Loading />

  return (
    <>
      <Header user={user} modal={modal} setModal={setModal} />
      {modal ? <Signin setModal={setModal} name={name} setName={setName} psw={psw} setPsw={setPsw} handSignIn={handSignIn} /> : ''}
      <Main list={list} removeCard={removeCard} />
    </>
  )
}

export default App
