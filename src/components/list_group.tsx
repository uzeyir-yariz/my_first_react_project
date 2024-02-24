import { MouseEvent } from "react";
import { useState } from "react";

// {items: [], heading: string }
interface props{
    items: string[];
    heading: string;
    onselectitem: (item: string) => void;
}

function list_group({items, heading, onselectitem}: props){
    

    const [selected_index, set_selected_index] = useState(-1);

    const msg_null = items.length === 0 ? <p>no items here</p> : null;
    // event handler

    return(
        <>
            <h1>{heading}</h1>
            {msg_null}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li 
                        className={selected_index === index ? 
                            'list-group-item active' : 
                            'list-group-item'} 
                        key={item}
                        onClick={() => {
                            set_selected_index(index);
                            onselectitem(item);
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default list_group; // burada list_group adlı .tsx dosyamızı app.tsx tanıtıyoruz

/*
! Check the render method of `list_group`. See https://reactjs.org/link/warning-keys for more information.
!    at li
!    at list_group
!    at div
!    at app

* şöyle bir osrun ile karşılaşırsan key={item} yazmayı bir göszden geçir */