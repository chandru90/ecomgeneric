import classes from './Proam.module.css'
import Card from './Card'
import Promi from './Promi'

const DUMMY_MEALS =[{
    id :1,
    name : 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
     },
    {
        id:2,
    name : 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    { id:3,
 name: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    { id:4,
    name: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    
    ]
  
   





const Proam=()=>{
        const MealList =DUMMY_MEALS.map((meal)=> <Promi key={meal.id} id= {meal.id} name ={meal.name}  price={meal.price} imageUrl={meal.imageUrl} /> )
    return <section className ={classes.meals}>
       <Card>
       <ul>
            {MealList}
        </ul>
       
        </Card>
    </section>
}
export default Proam