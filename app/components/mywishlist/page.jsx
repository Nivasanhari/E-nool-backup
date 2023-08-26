"use client"
import Image from 'next/image'
import React ,{useState} from 'react'
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import moreOption from 'public/icons/more-options-dotted.png';
import { CardsGrid, CardsList } from "@/app/components/CardsGrid/Cards";



const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];



const bookgrid = [
  {
    id: '1',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '2',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '3',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '4',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '5',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '6',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '7',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '8',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  },
  {
    id: '9',
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: '4',
    ratingCount: '27',
    currency: 'Rs',
    price: '50', // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  }
];




const page = () => {

    const handleOptionSelect = (selectedOption) => {
        console.log('Selected option:', selectedOption);
        // You can perform any other actions here based on the selected option.
      };
      const enableGridView = () => {
        if (!isGridView) {
            setGridView(true);
        }
    };
    const [isGridView, setGridView] = useState(true);

    const enableWishView = () => {
        if (!isGridView) {
            setGridView(true);
        }
    };

  return (
    <div className='mx-auto container pl-50'>
      
      {isGridView ? (
              <div className='ml-50'>
          {bookgrid.map((book) => (
            <CardsGrid
              key={book.id}

              title={book.title}
              author={book.author}
              rating={book.rating}
              ratingCount={book.ratingCount}
              currency={book.currency}
              price={book.price}
              imageSrc={book.imageSrc} />
          ))}
              </div>
            ) : (
              <div>
                <CardsList />
              </div>
            )}
       
    </div>
  )
}

export default page
