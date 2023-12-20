
import Carousel from 'react-bootstrap/Carousel';
import './Animation.css'
import React from 'react';

function Animation(){
    
    return(
        <>
        <Carousel>
        <Carousel.Item interval={1000}>
            <img className='d-block ' src='https://images.squarespace-cdn.com/content/v1/526216ece4b01abd6f664eb6/1422663726093-OP84ES0LEKOEP914NDB8/family-photography-background-ideas-01'  alt='First slide'/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img className='d-block ' src='https://images.squarespace-cdn.com/content/v1/526216ece4b01abd6f664eb6/1422663726093-OP84ES0LEKOEP914NDB8/family-photography-background-ideas-01' alt='Second slide'/>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block ' src='https://images.squarespace-cdn.com/content/v1/526216ece4b01abd6f664eb6/1422663726093-OP84ES0LEKOEP914NDB8/family-photography-background-ideas-01' alt='Third slide'/>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </>
    
        
  );
}
    
export default Animation;

