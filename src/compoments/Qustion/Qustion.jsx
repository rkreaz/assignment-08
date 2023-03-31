import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Qustion.css'
const Qustion = () => {
    return (
        <div className='container'>
            <div>
               <Card>
                 <Card.Body className='question_body'>
                    <Card.Title className='question_title'>01: What is the difference between props and State...?</Card.Title>
                    <Card.Text className='question_pra'>
                    Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </Card.Text>
                </Card.Body>
            </Card><br />
        </div>
            <div>
               <Card>
                 <Card.Body className='question_body'>
                    <Card.Title className='question_title'>02: What is the difference between props and State...?</Card.Title>
                    <Card.Text className='question_pra'>
                    Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </Card.Text>
                </Card.Body>
            </Card><br />
        </div>
            <div>
               <Card>
                 <Card.Body className='question_body'>
                    <Card.Title className='question_title'>03: What is the difference between props and State...?</Card.Title>
                    <Card.Text className='question_pra'>
                    Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </Card.Text>
                </Card.Body>
            </Card><br />
        </div>
            <div>
               <Card>
                 <Card.Body className='question_body'>
                    <Card.Title className='question_title'>04: What is the difference between props and State...?</Card.Title>
                    <Card.Text className='question_pra'>
                    Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
          
 
        </div>
    );
};

export default Qustion;