import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Blog.css';
import athourImg from '../../assets/image/pexels-photo-614810.webp'
import iconImage from '../../assets/image/Frame (1).png'
const Blog = (props) => {
    const {author,title,coverimage,authorimage,readtime,publishdate}=props.blog;
    const bookmarkBlog = props.bookmarkBlog;
    const minCountBlog = props.minCountBlog;
    return (
       
        <Card className='card_blog mb-5'>
            <Card.Img variant="top" src={coverimage}/>

            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div className='athour-area d-flex'>
                        <div>
                            <img src={authorimage} alt="" />
                        </div>
                        <div className='ms-4'>
                            <h5 className='author_name'>{author}</h5>
                            <p>{publishdate}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5>{readtime} min read <img role='button' onClick={()=> bookmarkBlog(props.blog)} src={iconImage}/></h5> 
                        </div>
                    </div>

                </div>
                <Card.Title className='card_title'>{title}</Card.Title>
                <Card.Text>
                   <samp>#beginners </samp> <span> #programming</span>
                </Card.Text>
               <span className='mark_read' role='button' onClick={()=>minCountBlog(props.blog)}>Mark as read</span>
            </Card.Body>
        </Card>
    );
};

export default Blog;