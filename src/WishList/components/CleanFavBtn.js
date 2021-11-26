import { useDispatch } from "react-redux";
import { RESET_ALL_STATUS } from "../../store/types";

export default function CleanFavBtn() {
    const dispatch = useDispatch();

    return (
        <div className="wish-list__btn">
            <button type="button" onClick={() => {dispatch({ type: RESET_ALL_STATUS})}}>
                Clear all items</button>
        </div>
    );
}