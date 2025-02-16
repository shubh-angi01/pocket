import { useDispatch, useSelector } from "react-redux";
import { selectExpenses, deleteExpense } from "./ExpenseSlice";
import { TrashIcon } from "@heroicons/react/24/solid"; // Importing the delete icon

function ExpenseList() {
    const dispatch = useDispatch();
    const expenses = useSelector(selectExpenses) || [];

    function handleDelete(description) {
        dispatch(deleteExpense({ description }));
    }

    if (expenses.length > 0)
        return (
            <div className="max-w-68 mt-6 w-full self-center overflow-hidden rounded-sm border border-rose-300 bg-stone-100 md:max-w-96">
                <ul className="thin-scrollbar max-h-60 overflow-y-scroll scroll-smooth">
                    {expenses.slice().reverse().map((expense, index) => (
                        <li
                            key={index}
                            className={`${index % 2 === 0 ? "bg-stone-100" : "bg-stone-300"} flex justify-between gap-3 px-3 py-1`}
                        >
                            <span className="text-wrap">
                                {expense.expenseType} - {expense.description} :
                            </span>
                            <span>{expense.amount}</span>
                            <button
                                onClick={() => handleDelete(expense.description)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <TrashIcon className="w-5 h-5" /> {/* Trash Icon */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
}
export default ExpenseList;