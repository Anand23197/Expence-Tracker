import './ExpenseItem.css';

function ExpenceItem(){
    let title = "car insurence";
   return (
       <div className="expense-item">
            <div >
                <div>March 12th 2021</div>
            </div>
            <div className="expense-item__descreption"> 
                <h2> {title}</h2>
                <div className="expense-item__price">$200</div>
            </div>
       </div>
   );
}

export default ExpenceItem;