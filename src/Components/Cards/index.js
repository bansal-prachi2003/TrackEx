import React from 'react'
import './style.css';
import { Card,Row } from "antd";
import Button from "../Button";
function Cards({income,expense,currentBalance,showExpenseModal,showIncomeModal}) {
  return (
    <div>
     <Row className="my-row">
        <Card bordered={true} className="my-card">
        <h2>Current Balance</h2>
        <p>₹{currentBalance}</p>
       
        </Card>

        <Card bordered={true} className="my-card">
        <h2>Total Amount</h2>
        <p>₹{income}</p>
        <Button text="Add Amount" blue={true} onClick={showIncomeModal}/>
        </Card>

        <Card bordered={true} className="my-card">
        <h2>Total Expense</h2>
        <p>₹{expense}</p>
        <Button text="Add Expense" blue={true} onClick={showExpenseModal}/>
        </Card>
    </Row> 
    </div>
  )
}

export default Cards;
