import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import ShowFoods from './ShowFoods'
const dinnerFakeData = [
  {
    id: 1,
    price: 21,
    type: 'dinner',
    foodName: 'Beef Stroganoff',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/GPJnCz7/dinner1.png`,
    img1: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
    img2: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
  },
  {
    id: 2,
    price: 87,
    type: 'dinner',
    foodName: 'Reuben',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
    img1: `https://i.ibb.co/GPJnCz7/dinner1.png`,
    img2: `https://i.ibb.co/kKd3YbL/breakfast3.png`,
  },
  {
    id: 3,
    price: 61,
    type: 'dinner',
    foodName: "Waldorf Salad",
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/wQ2FgWG/dinner2.png`,
    img1: `https://i.ibb.co/dfVqm5T/dinner4.png`,
    img2: `https://i.ibb.co/dfVqm5T/dinner4.png`,
  },
  {
    id: 4,
    price: 41,
    type: 'dinner',
    foodName: "Chicken à la King",
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/dfVqm5T/dinner4.png`,
    img1: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
    img2: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
  },
  {
    id: 5,
    price: 31,
    type: 'dinner',
    foodName: 'Pizza Margherita',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/3d845tC/dinner5.png`,
    img1: `https://i.ibb.co/dfVqm5T/dinner4.png`,
    img2: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
  },
  {
    id: 6,
    price: 42,
    type: 'dinner',
    foodName: 'Endo Sushi',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
    img1: `https://i.imgur.com/QLqCgHO.png`,
    img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
  },
  {
    id: 7,
    price: 21,
    foodName: 'Machacado con huevo',
    type: 'lunch',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/Tqd17Yb/lunch1.png`,
    img1: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
    img2: `https://i.imgur.com/QLqCgHO.png`,
  },
  {
    id: 8,
    price: 87,
    foodName: 'Onion fry with mango',
    type: 'lunch',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/wdFVk0w/lunch2.png`,
    img1: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
    img2: `https://i.imgur.com/QLqCgHO.png`,
  },
  {
    id: 9,
    price: 61,
    foodName: 'Egg fry with Rice',
    type: 'lunch',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/kGW6XwG/lunch3.png`,
    img1: `https://i.imgur.com/QLqCgHO.png`,
    img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
  },
  {
    id: 10,
    price: 41,
    foodName: 'Seafood - The best See food',
    type: 'lunch',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/1GDJLrP/lunch4.png`,
    img1: `https://i.imgur.com/QLqCgHO.png`,
    img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
  },
  {
    id: 11,
    price: 31,
    foodName: ' made Sushi',
    type: 'lunch',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.imgur.com/OKsCdMg.png`,
    img1: `https://i.imgur.com/QLqCgHO.png`,
    img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
  },
  {
    id: 12,
    price: 42,
    foodName: 'Made in Bangladeshi Food',
    type: 'lunch',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    description: 'Lorem ipsum dolor sit amet',
    img: `https://i.imgur.com/QLqCgHO.png`,
    img1: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    img2: `https://i.ibb.co/T4BtxP2/breakfast2.png`,
  },
  {
    id: 13,
    price: 17,
    foodName: 'Black Forest gateau',
    type: 'breakfast',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    img1: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
    img2: `https://i.ibb.co/c6zT3sz/breakfast4.png`,
  },
  {
    id: 14,
    price: 32,
    foodName: 'Cherpumple',
    type: 'breakfast',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/T4BtxP2/breakfast2.png`,
    img1: `https://i.ibb.co/GPJnCz7/dinner1.png`,
    img2: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
  },
  {
    id: 15,
    price: 21,
    foodName: 'Bistecca alla fiorentina',
    type: 'breakfast',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/kKd3YbL/breakfast3.png`,
    img1: `https://i.ibb.co/LktFB4R/breakfast6.png`,
    img2: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
  },
  {
    id: 16,
    price: 91,
    foodName: 'Bistec de Palomilla',
    type: 'breakfast',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/c6zT3sz/breakfast4.png`,
    img1: `https://i.imgur.com/QLqCgHO.png`,
    img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
  },
  {
    id: 17,
    price: 71,
    foodName: 'Lobster Newburg',
    type: 'breakfast',
    description: 'Lorem ipsum dolor sit amet', details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
    img1: `https://i.ibb.co/GPJnCz7/dinner1.png`,
    img2: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
  },
  {
    id: 18,
    price: 121,
    foodName: 'Boeuf à la mode',
    type: 'breakfast',
    description: 'Lorem ipsum dolor sit amet',
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
    img: `https://i.ibb.co/LktFB4R/breakfast6.png`,
    img1: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
    img2: `https://i.ibb.co/c6zT3sz/breakfast4.png`,
  },
]
const Food = () => {
  const [type, setType] = useState('Breakfast')
  
  const [food, setFoods] = useState([])

  useEffect(() => {
    const item = dinnerFakeData.filter(
      (fd) => fd.type.toLowerCase() === type.toLowerCase(),
    )
    setFoods(item)
  }, [type])

  

  return (
    <div>
      <div className="container mt-3">
        <div className="d-flex justify-content-around container">
          <h5
            className={type === 'breakfast' ? 'active m-2' : 'm-2'}
            style={{ cursor: 'pointer',  }}
            onClick={() => setType('Breakfast')}
          >
            Breakfast
          </h5>
          <br /> <br />
          <h5
            className={type === 'lunch' ? 'active m-2' : 'm-2'}
            style={{ cursor: 'pointer' ,  }}
            onClick={() => setType('lunch')}
          >
            Lunch
          </h5>
          <br /> <br />
          <h5
            className={type === 'dinner' ? 'active m-2' : 'm-2'}
            style={{ cursor: 'pointer',  }}
            onClick={() => setType('Dinner')}
          >
            Dinner
          </h5>
          <br />
        </div>
        <h3 className="text-center mb-4">Please select your <span style={{color:"red"}}>{type}</span> </h3>
        <div className="row justify-content-center ">
          {food.map((foods) => (
            <ShowFoods foods={foods}></ShowFoods>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Food
