import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location.state);

    const navigate = useNavigate();
    const onClickBack = () => navigate("/page1");
    return (
        <>
            <div>
                <h1>Page1 DetailA</h1>
                <button onClick={onClickBack}>back</button>
            </div>
        </>
    );
};