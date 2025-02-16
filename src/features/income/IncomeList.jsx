import { useDispatch, useSelector } from "react-redux";
import { selectIncomes, deleteIncome } from "./IncomeSlice";
import { TrashIcon } from "@heroicons/react/24/solid";

function IncomeList() {
    const dispatch = useDispatch();
    const incomes = useSelector(selectIncomes) || [];

    function handleDelete(description) {
        dispatch(deleteIncome({ description }));
    }

    if (incomes.length > 0)
        return (
            <div className="max-w-68 mt-6 w-full self-center overflow-hidden rounded-sm border border-sky-300 bg-stone-100 md:max-w-96">
                <ul className="thin-scrollbar max-h-60 overflow-y-scroll scroll-smooth">
                    {incomes.length > 0 &&
                        incomes
                            .slice()
                            .reverse()
                            .map((income, index) => (
                                <li
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-stone-100" : "bg-stone-300"} flex justify-between items-center gap-3 px-3 py-1`}
                                >
                                    <span>{income.description} : {income.amount}</span>
                                    <button
                                        onClick={() => handleDelete(income.description)}
                                        className="text-green-500 hover:text-green-700"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </li>
                            ))}
                </ul>
            </div>
        );
}

export default IncomeList;
