import React from 'react';
import './App.css';
import { useState } from 'react';

interface IndividualFoodProps {
    src?: string;
    dish?: string;
    clickButton?: () => void;
    trigger?: boolean
}

export const IndividualFood= ({
    src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" ,
    dish = 'Sweet and Sour Fish',
    ...props
}: IndividualFoodProps) => {
    
    return (
        
            <div className = {props.trigger? 'food-container-triggered' : 'food-container'} onClick={props.clickButton}>
                <img src = {src}  alt="Menu D" className="stretched-image"/>
                <p className = "image2-description">
                {dish}
                </p>
            </div>
        
    )
    }