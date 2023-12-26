import { useContext } from "react";
import QueryContext from "../../../../context/QueryContext";
import { BiColumns } from "react-icons/bi";

function QueryComponent(query) {
    const { selectedQuery, setSelectedQuery } = useContext(QueryContext);

    return (
        <button
            style={{    color : "#4f46e5" ,
                fontSize : "1.6rem" , width :"20%"}}
            key={query.id}
            title={query.name}
            onClick={() => setSelectedQuery(query)}
        >
            Query {query.id}
        </button>
    );
}

export default QueryComponent;
