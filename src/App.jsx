import { useEffect, useState } from 'react'
import Blog from './compoments/Blog/Blog'
import Header from './compoments/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookmarked from './compoments/Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Qustion from './compoments/Qustion/Qustion';

function App() {
  const [count, setCount] = useState(0)
  const [booksmark, setBooksmark] = useState([])
  const [minBlog, setMinBlog] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  
  const bookmarkBlog = (blog) => {
    const findBup = booksmark.find(b => b.id === blog.id)
    if(!findBup) {
      setBooksmark([...booksmark, blog])
    } else {
      toast.error('Blog already added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
  
  const minCountBlog = (blog) => {
    const findBup = minBlog.find(b => b.id === blog.id)
    if(!findBup) {
      setMinBlog([...minBlog, blog])
    } else {
      toast.error('Blog already added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

// console.log(booksmark)

const showAccordion = () => {
  if (window.location.pathname === "/blog") {
    return <Qustion />
  } else {
    return (
<div className='container border-top pt-4'>
        <div className='row'>
          <div className="col-md-8 sm-6">

            {blogs.map((b) => <Blog key={b.id} minCountBlog={minCountBlog} bookmarkBlog={bookmarkBlog} blog={b}></Blog>)}
              
          </div>

          <div className="col-md-4 sm-6">
            <Bookmarked minBlog={minBlog} booksmark={booksmark}/>
          </div>

        </div>
      </div>
    )
  }
}


  return (
    <div className="App">
      <Header></Header>
      {showAccordion()}
      
      <ToastContainer />
    </div>
  )
}

export default App
