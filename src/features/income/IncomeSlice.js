import { createSlice } from "@reduxjs/toolkit";
import { updateBalance } from "../balance/BalanceSlice";

const loadIncomesFromLocalStorage = function () {
    const savedIncomes = localStorage.getItem("incomes");
    return savedIncomes ? JSON.parse(savedIncomes) : [];
};

const initialState = {
    incomes: loadIncomesFromLocalStorage()
};

const incomeSlice = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        addIncome(state, action) {
            state.incomes.push(action.payload);
        },
        setIncomes(state, action) {
            state.incomes = action.payload;
        },
        deleteIncome(state, action) {
            const incomeToDelete = state.incomes.find(inc => inc.description === action.payload.description);
            if (incomeToDelete) {
                state.incomes = state.incomes.filter(inc => inc.description !== action.payload.description);
                updateBalance(-incomeToDelete.amount);
            }
        }
    }
});

export const { addIncome, setIncomes, deleteIncome } = incomeSlice.actions;
export const selectIncomes = (state) => state.income.incomes;
export default incomeSlice.reducer;