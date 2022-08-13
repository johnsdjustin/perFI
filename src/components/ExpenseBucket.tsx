import React, { FunctionComponent } from "react";
import './ExpenseBucket.css'
import Card from "./Card";

interface ExpenseBucketProps {
    heading: string;
    balance: number;
    goal: number;
}

const ExpenseBucket: FunctionComponent<ExpenseBucketProps> = ({heading, balance, goal}) => {
    return (
        <Card>
            <div className='ExpenseBucket'>
            {heading}
            <div className = "ExpenseContainer">
                <div className = "ExpenseItem">
                <span  className = "ExpenseItemSubHeaderText">Balance</span>
                <span className="ExpenseItemNumber">${balance}</span>
                </div>
                <div className='ExpenseItem'>
                <span className = "ExpenseItemSubHeaderText">Goal</span>
                <span className = "ExpenseItemNumber">${goal}</span>
                </div>
            </div>
            </div>
        </Card>
    )
}

export default ExpenseBucket;