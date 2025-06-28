import { useNavigate } from "react-router"

export const useHome = () => {
    const navigate = useNavigate()

    return {
        navigate
    }

}