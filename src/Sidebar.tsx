import { useState } from "react";
import SideButtons from "./SideButtons";

type SidebarProps = {
   addNewItem: (text: string) => void
}

export default function Sidebar({ addNewItem }: SidebarProps) {
   const [text,setText] = useState("");

   const handleText = () => {
      addNewItem(text);
      setText("");
   };

    return (
      <div className="bg-info p-3 border-bottom flex-column">
        <form
        onSubmit={(e) => {
         e.preventDefault();
         handleText();
        }}
        >
           <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder=""
           />
           <div className="text-center pt-2">
               <SideButtons onClick={handleText}/>
            </div>
        </form>
       </div>
    );
}