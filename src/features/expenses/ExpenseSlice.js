import { createSlice } from "@reduxjs/toolkit";
import { updateBalance } from "../balance/BalanceSlice";

const loadExpensesFromLocalStorage = function () {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
};

const initialState = {
    expenses: loadExpensesFromLocalStorage(),
};

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense(state, action) {
            state.expenses.push(action.payload);
        },
        setExpenses(state, action) {
            state.expenses = action.payload;
        },
        deleteExpense(state, action) {
            const expenseToDelete = state.expenses.find(exp => exp.description === action.payload.description);
            if (expenseToDelete) {
                state.expenses = state.expenses.filter(exp => exp.description !== action.payload.description);
            }
        }
    }
});

export const { addExpense, setExpenses, deleteExpense } = expenseSlice.actions;
export const selectExpenses = (state) => state.expense.expenses;
export default expenseSlice.reducer;