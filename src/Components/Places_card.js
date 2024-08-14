import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Place_cardCSS.css';


// Sample array of card data
const cardData = [
    { id: 1, title: 'Card 1', content: 'This is the first card' },
    { id: 2, title: 'Card 2', content: 'This is the second card' },
    { id: 3, title: 'Card 3', content: 'This is the third card' },
    { id: 4, title: 'Card 4', content: 'This is the fourth card' },
    { id: 5, title: 'Card 5', content: 'This is the fifth card' },
    { id: 6, title: 'Card 6', content: 'This is the sixth card' },
    { id: 7, title: 'Card 7', content: 'This is the seventh card' },
];

export default function Places_card() {
     // Settings for the react-slick slider
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Number of cards to show at a time
        slidesToScroll: 1, // Number of cards to scroll on each click
        nextArrow: <SampleNextArrow />, // Custom next arrow component
        prevArrow: <SamplePrevArrow />, // Custom previous arrow component
    };

  return (
    <div className='items'>
        <Slider {...settings}>
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <div className='card_item'>
                <div className='card_top'>Lorem</div>
                <div className='card_middle'>Lorem</div>
                <div className='card_bottom'>Lorem</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

// Custom Next Arrow component
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'rgba(15, 82, 69, 1)', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  };
  
  // Custom Previous Arrow component
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'rgba(15, 82, 69, 1)', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  };

