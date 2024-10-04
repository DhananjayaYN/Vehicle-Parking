import React , {useState , useEffect , useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Place_cardCSS.css';
import bike from '../Images/Cutomer/VehicleCategories/Bike.svg'
import wheel from '../Images/Cutomer/VehicleCategories/Bus.svg'
import car from '../Images/Cutomer/VehicleCategories/Car.svg'

// Sample array of card data
// const cardData = [
//     { id: 1, title: 'Card 1', content: 'This is the first card' },
//     { id: 2, title: 'Card 2', content: 'This is the second card' },
//     { id: 3, title: 'Card 3', content: 'This is the third card' },
//     { id: 4, title: 'Card 4', content: 'This is the fourth card' },
//     { id: 5, title: 'Card 5', content: 'This is the fifth card' },
//     { id: 6, title: 'Card 6', content: 'This is the sixth card' },
//     { id: 7, title: 'Card 7', content: 'This is the seventh card' },
// ];

export default function Places_card({ selectedLocationId }) {

    // useState hook to manage the card data
    const [cardData, setCardData] = useState([]);
    const sliderRef = useRef(null); // Ref to access the slider instance

    // useEffect hook to fetch data from the backend when the component mounts
    useEffect(() => {
        // Make a GET request to the backend API to fetch data from the 'owner' collection
        const fetchOwnerShop = async () => {
          const response = await fetch(`/api/owners/`);
          const jsona = await response.json();
    
          if(response.ok){
            // Update the state with the fetched data
            setCardData(jsona);
          }else{
            console.log(jsona);
          }
          console.log(cardData);
        }
        fetchOwnerShop();

    }, []); // Empty dependency array means this effect runs once after the initial render

    // Move the slider to the card that matches the selected location
    useEffect(() => {
      if (selectedLocationId && cardData.length > 0 && sliderRef.current) {
          const index = cardData.findIndex(card => card._id === selectedLocationId);
          if (index !== -1) {
            sliderRef.current.slickGoTo(index);
          }
      }
    }, [selectedLocationId, cardData]);
    
    // Event handler to handle card click
    const handleCardClick = (id) => {
      console.log(`Card ID: ${id}`); // Log the card ID to the console
    };

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
        <Slider ref={sliderRef} {...settings}>
        {cardData.map((card) => (
          <div className="card" key={card._id} onClick={() => handleCardClick(card._id)}>
            <div className='card_item'>
                <div className='card_top'>
                  <div className='card_image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBR0FJBeFSJIulcpdvBOr2AafIvPMti5e1g&s' alt='Shop Image'/>
                  </div>
                  <div className='card_open_time'>
                    <div className='card_show_open'>Open</div>
                    <div className='card_show_time'>6.00 am - 11.00 pm</div>
                  </div>     
                </div>
                <div className='card_middle'>
                  <div className='card_middle_title'>{card.company_name}</div>
                  <p className='card_middle_address'>({card.address?.address_line_1 || 'N/A'}), {card.address?.address_line_2 || 'N/A'}</p>
                  <div className='card_middle_icon'>
                    {card.vehicle_types?.bike && (
                      <img
                       src={bike}
                       alt="Bike"
                       className="card_vehicle-image"
                     />
                    )}
                    {card.vehicle_types?.threewheel && (
                      <img
                       src={wheel}
                       alt="wheel"
                       className="card_vehicle-image"
                     />
                    )}
                    {card.vehicle_types?.car && (
                      <img
                       src={car}
                       alt="car"
                       className="card_vehicle-image"
                     />
                    )}
                  </div>
                </div>
                <div className='card_bottom'>
                  <hr/>
                  <div className='card_bottom_grid'>
                    <div className='card_bottom_rating'>sdfj</div>
                    <div className='card_bottom_price'>jhccsc</div>
                  </div>
                </div>
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

