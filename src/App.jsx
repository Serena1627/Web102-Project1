import React from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const cardData = [
    { id: 1, imageUrl: 'https://s.hdnux.com/photos/01/26/47/56/22707123/4/1200x0.jpg', nameText:'El Taco', subText: 'Mexican', buttonText: 'Menu' },
    { id: 2, imageUrl: 'https://i2-prod.dublinlive.ie/incoming/article23709801.ece/ALTERNATES/s1200d/0_IMG-20220413-WA0057.jpg', nameText: 'Baryani', subText: 'Indian', buttonText: 'Menu' },
    { id: 3, imageUrl: 'https://images.huffingtonpost.com/2014-11-14-IMG_56781.jpg', nameText: 'Halal guys', subText: 'Middle Eastern', buttonText: 'Menu' },
    { id: 4, imageUrl: 'https://res.cloudinary.com/foodease/image/upload/s--bac9tSee--/ar_16:9,c_fill/dpr_3.0,w_225/c_fill,g_south_west,l_foodease_watermark,o_31,w_13,x_3,y_3/fl_lossy/v1684763040/vendors/eat-green-urban-salads-llc.jpg', nameText: 'Eat Green', subText: 'Vegetarian', buttonText: 'Menu' },
    { id: 5, imageUrl: 'https://i.ytimg.com/vi/30cWX-TfzO8/maxresdefault.jpg', nameText:'King Wok', subText: 'Chinese', buttonText: 'Menu' },
    { id: 6, imageUrl: 'https://i.pinimg.com/originals/60/f5/62/60f5625cc3902309500f754205492f90.png', nameText:'Street Cafe', subText: 'Cafe', buttonText: 'Menu' },
    { id: 7, imageUrl: 'https://www.bobaddiction.com/uploads/b/2427b5d0-6709-11ea-a9e5-95f2a3eaebe3/FB_IMG_1530630325360.jpg', nameText:'Bobaddiction', subText: 'Boba', buttonText: 'Menu' },
    { id: 8, imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/mypeJWctMQ0siL3TGf6qCA/1000s.jpg', nameText:'Sweet Things', subText: 'Dessert', buttonText: 'Menu' },
    { id: 9, imageUrl: 'https://i0.wp.com/billypenn.com/wp-content/uploads/2022/08/dfnigeria-foodtruck-01.jpg?fit=2400%2C1800&ssl=1', nameText:'Divine Flavored', subText: 'African', buttonText: 'Menu' },
    { id: 10, imageUrl: 'https://images.squarespace-cdn.com/content/v1/61a17b33d6a94c67f41fb646/86891373-a20d-47ae-abfc-e739eb9b2e32/_DSC0171.jpg', nameText:'Paisani', subText: 'Italian', buttonText: 'Menu' },
  ];

  return (
    <div className="App">
      <header>
        <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" alt="Header" />
        <h1>My Foodtruck Reccomendation</h1>
      </header>

      <main>
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} buttonText={card.buttonText} subText={card.subText} nameText={card.nameText}/>
        ))}
      </main>
    </div>
  );
};

export default App;
