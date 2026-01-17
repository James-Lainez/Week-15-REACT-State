import Item from "./ItemList";

  type mainPocketProps = {
    items: Array<{ id: number, text: string }>
    deleteItem: (id: number) => void
  };

export default function MainPocket({ items, deleteItem }: mainPocketProps) {
    return (
        <div className="container pb-2">
            <div className="d-flex justify-content-center algin-item-center" 
            style={{background: "rgb(151, 133, 19)"}}>
              <div className="text-white m-2 p-2">
                <><h2>Main Pocket</h2></>
                </div>
            </div>
            <>
               <Item items={items} deleteItem={deleteItem}/>
            </>
        </div> 
    )
}