import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


function Expenses(props) {

    return (
        <Card className="expenses">
            {props.item.map((item, index)=> {
                return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
            })}
        </Card>
    )
}
export default Expenses;