import React from 'react';
import './App.css';
import { useState } from 'react';
import { IndividualFood } from './individualfood.tsx';
import ButtonLayout from './ButtonLayout.js';

export default function MenuA() {
    const [activeButtonA, setActiveButtonA] = useState(0);
    const handleClickA = (buttonId : number)=> {
       setActiveButtonA(buttonId);
       console.log('clicked');
    }

    const [activeButtonB, setActiveButtonB] = useState(0);
    const handleClickB = (buttonId : number)=> {
       setActiveButtonB(buttonId);
       console.log('clicked');
    }

    const [activeButtonC, setActiveButtonC] = useState(0);
    const handleClickC = (buttonId : number)=> {
       setActiveButtonC(buttonId);
       console.log('clicked');
    }

    const [activeButtonD, setActiveButtonD] = useState(0);
    const handleClickD = (buttonId : number)=> {
       setActiveButtonD(buttonId);
       console.log('clicked');
    }

    const [activeButtonE, setActiveButtonE] = useState(0);
    const handleClickE = (buttonId : number)=> {
       setActiveButtonE(buttonId);
       console.log('clicked');
    }

    return (
        <div>
        < ButtonLayout/>
        <div className = "menu">
            <div className = "app">
                <h1>Menu 1</h1>
            </div>
           
            <div className = "sections">
                <h3>Choose 1 meat:</h3>
                <IndividualFood clickButton={() => handleClickA(1)} trigger={activeButtonA == 1 ? true : false} />
                <IndividualFood src = "https://temeculablogs.com/wp-content/uploads/2023/04/Best-Fish-to-Deep-Fry-Whole-1.jpg" dish = "Fried Fish" clickButton={() => handleClickA(2)} trigger={activeButtonA == 2 ? true : false} />
                <IndividualFood src = "http://lh6.ggpht.com/Hjzn8iCKaHbRJpXl7p_eolhx9hY0QJSWWYw3jr3_0NvmJ-qrr_shxsU4JBBvy2tO5l9DQZfvkZe8jFzS7ZEpl9MR=s800" dish="Butter Milk Fish" clickButton={() => handleClickA(3)} trigger={activeButtonA == 3 ? true : false}/>
            </div>
            <div className = "sections">
                <h3>Choose 1 meat:</h3>
                <IndividualFood src = "https://mymorningmocha.com/wp-content/uploads/2023/08/Sweet-And-Sour-Chicken-Recipe.jpg" dish = "Sweet and Sour Chicken" clickButton={() => handleClickB(1)} trigger={activeButtonB == 1 ? true : false} />
                <IndividualFood src = "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" dish = "Fried Chicken" clickButton={() => handleClickB(2)} trigger={activeButtonB == 2 ? true : false} />
                <IndividualFood src = "https://www.ajinomoto.com.my/sites/default/files/content/recipe/image/2021-03/1.-Butter-Chicken_Photo1.jpg" dish="Butter Milk Chicken" clickButton={() => handleClickB(3)} trigger={activeButtonB == 3 ? true : false}/>
            </div>
            <div className = "sections">
                <h3>Choose 1 Vege:</h3>
                <IndividualFood src = "https://www.budgetbytes.com/wp-content/uploads/2022/02/15-Minute-Vegetable-Curry-pot.jpg" dish = "Curry Vege" clickButton={() => handleClickC(1)} trigger={activeButtonC == 1 ? true : false} />
                <IndividualFood src = "https://www.newmalaysiankitchen.com/wp-content/uploads/2020/03/stir-fry-mixed-vegetables.jpeg" dish = "Stir Fried Mixed Vege" clickButton={() => handleClickC(2)} trigger={activeButtonC == 2 ? true : false} />
                <IndividualFood src = "https://noobcook.com/wp-content/uploads/2012/01/SAM_2130.jpg" dish="Luo Han Vege" clickButton={() => handleClickC(3)} trigger={activeButtonC == 3 ? true : false}/>
            </div>
            <div className = "sections">
                <h3>Choose 1 Dessert:</h3>
                <IndividualFood src = "https://www.budgetbytes.com/wp-content/uploads/2022/02/15-Minute-Vegetable-Curry-pot.jpg" dish = "Curry Vege" clickButton={() => handleClickD(1)} trigger={activeButtonD == 1 ? true : false} />
                <IndividualFood src = "https://www.newmalaysiankitchen.com/wp-content/uploads/2020/03/stir-fry-mixed-vegetables.jpeg" dish = "Stir Fried Mixed Vege" clickButton={() => handleClickD(2)} trigger={activeButtonD == 2 ? true : false} />
            </div>
            <div className = "sections">
                <h3>Choose 1 Drink:</h3>
                <IndividualFood src = "https://www.budgetbytes.com/wp-content/uploads/2022/02/15-Minute-Vegetable-Curry-pot.jpg" dish = "Curry Vege" clickButton={() => handleClickE(1)} trigger={activeButtonE == 1 ? true : false} />
                <IndividualFood src = "https://www.newmalaysiankitchen.com/wp-content/uploads/2020/03/stir-fry-mixed-vegetables.jpeg" dish = "Stir Fried Mixed Vege" clickButton={() => handleClickE(2)} trigger={activeButtonE == 2 ? true : false} />
            </div>
            

        </div>
        </div>
    )
    

    }
