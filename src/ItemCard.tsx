import { useState } from "react";
import DeleteButton from "./DeleteButton";

type itemCardProps = {
  item: {
    id: number;
    text: string;
  }
  deleteItem: (id: number) => void
}

export default function ItemCard({item, deleteItem }: itemCardProps){
  const [isChecked, setIsChecked] = useState(true)

  const handleButtonClick = () => {
    setIsChecked(!isChecked)
  }
  return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          {isChecked && (
            <div className="card">
              <div className="container">
                <h5 className="card-title">{item.text}</h5>
              </div>

              <div className="mt-auto">
                <DeleteButton onClick={() => deleteItem(item.id)} />
            </div>
          </div>
          )}
          <button
            type="button"
            style={{width: '120px', alignItems:'center', justifyContent: 'center'}}
            className="btn bg-grey mt-auto p-2 bg-light border border-dark"
            onClick={handleButtonClick}
          ><span className="btn-text p-2">
            { isChecked ? "Check off" : [item.text," in pack"]}
            </span> 
          </button>
        </div>
  )
}