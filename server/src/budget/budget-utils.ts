import { Response } from 'express';

// Function to get the budget
export function getBudget(res: Response, budget: number) {
    res.status(200).send({ "data": budget });
}

// Function to update the budget
export function updateBudget(res: Response, body: any, budget: { amount: number }) {
    // TO DO: Implement updateBudget function
    const newBudget = body.amount;

    if(typeof newBudget !== 'number' || newBudget < 0){
        res.status(400).send({message: 'Invalid Budget'});
        return;
    }

    budget.amount = newBudget;

    res.status(200).send({message: "budget updated", data: budget.amount})
}
