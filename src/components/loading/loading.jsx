import { AiOutlineLoading } from "react-icons/ai";
import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";
import { LoadingComp } from "../../styled/styledLoading";

const Loading = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <LoadingComp theme={theme}>
                <h1 className="text">Loading</h1>
                <AiOutlineLoading color="red" className="loading-icon"/>
    
        </LoadingComp>
    )
}


export { Loading }