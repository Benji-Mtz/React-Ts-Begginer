import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // const message = items.length === 0 ? <p>No items found!</p> : null;

    return (
        <>
            <h1>List of { heading }</h1>
            {items.length === 0 && <p>No { heading } found!</p>}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li
                            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                            key={item}
                            onClick={() => setSelectedIndex(index)}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default ListGroup;