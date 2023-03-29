import classes from './Promif.module.css'
import Input from './Input'
import { useRef } from 'react'
const Promif=(props)=>{
    const amountInputRef=useRef()
    const submitHandler=event =>{
        event.preventDefault()
        const enterdAmount=amountInputRef.current.value
        const enterdAmountNumber = +enterdAmount
        props.onAddToCart(enterdAmountNumber)
    }
    return <form className={classes.form} onSubmit={submitHandler}>
    <Input
    ref={amountInputRef}
    label='amount' input={{id:'number',type:'number',min:1,defaultValue :1}}/>
        <button>+ Add Item</button>
    </form>
}
export default Promif