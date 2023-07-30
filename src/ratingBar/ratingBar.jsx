import React from 'react'
import styles from './ratingBar.module.css'
import {AiFillStar} from 'react-icons/ai' 

function RatingBar({rating,maxRating=5}) {
    
  return (
    <>
        <AiFillStar style={{color:'green'}}/>
        <AiFillStar style={{color:'green'}}/>
        <AiFillStar style={{color:'green'}}/>
        <AiFillStar style={{color:'green'}}/>
        <AiFillStar style={{color:'green'}}/>

    </>
  )
}

export default RatingBar