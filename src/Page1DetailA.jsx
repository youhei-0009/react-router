import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <>
            <div>
                <h1>Page1 DetailA</h1>
            </div>
        </>
    );
};