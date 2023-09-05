import RestuarntCard from "./RestuarntCard";
import { resList } from "../../utils/data";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(res => {
                        return (
                            <RestuarntCard key={res.data.id} resData={res} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;