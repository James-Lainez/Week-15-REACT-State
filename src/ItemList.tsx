import ItemCard from "./ItemCard";

type itemProps = {
    items: Array<{ id: number, text: string }>
    deleteItem: (id: number) => void
}

export default function Item({ items, deleteItem }: itemProps) {
  return(
    <div className="cards">        
        {items.map(i => <ItemCard 
          key={i.id}
          item={i}
          deleteItem={deleteItem}
          />
        )}
    </div>
    
  )
}