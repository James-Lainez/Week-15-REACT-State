/*Task 1: Move your test data into state
Time to make a state variable!
You can leave your test data wherever it is,
and create the state with the test data as the initial value.
Maybe something like this:
  - const [list, setList] = useState(TEST_DATA)

You’ll need to update the rest of the app to use the state instead of the test data.
You’ll probably need to pass things down through props for it all to be hooked up properly.

Task 2: Implement the create ability
Add the ability to create new items in your app. 
For now the new items won’t be dynamic,
because we haven’t learned how to build React forms yet. Just have it always add an item with the same data.
Make sure you’re setting the state to a copy of the array with the new item added.

Task 3: Implement the delete ability
Add the ability to delete items in your app.
Make sure you’re setting the state to a copy of the array with the item deleted.

Task 4: Implement the update ability
Add the ability to update items in your app.
For now pick something simple to update, like a boolean value.
Maybe toggle whether the item is starred, completed, hearted, etc.
The user could use a button or buttons to make the update.
We can do a full edit when we learn how to build React forms with inputs and things.
Make sure you’re setting the state to a copy of the array with an updated copy of the object.

Task 5: Test
Make sure your app is working correctly by making changes to your test data. Create items, delete items,
change properties on items, and make sure that the app is displaying exactly
what the test data says it should.

At this point, your project must meets these new requirements:
  • A user can create new items (the new items will all have the same data)
  • A user can delete items
  • A user can update at least one property on the items

As well as the requirements from last week:
  • It has at least 3 React components
  • It’s displaying the test data
  • It’s using at least 1 prop*/
 const TEST_DATA = [
    {
        id: 0,
        text: "Firstaid Kit"
    },
    {
        id: 1,
        text: "Flashlight"
    },
    {
        id: 2,
        text: "Hatchet"
    },
    {
        id: 3,
        text: "Rope"
    }
]



import { useState } from "react";
import MainPocket from "./MainPocket"; 
import Sidebar from "./Sidebar";


export default function BackpackApp() {
  const [isItems, setIsItems] = useState(TEST_DATA)

  const addNewItem = (text: string) => {
    if (!text.trim()) return;

    const newItem = {
      id: isItems.length ? isItems[isItems.length - 1].id + 1 : 0,
      text: text
      }

  setIsItems( [ ...isItems, newItem ] )
  }

  const deleteItem = (idToDelete: number) => {
    setIsItems( isItems.filter(i => i.id !== idToDelete) )
  }
  
  return (
    <div className="d-flex vh-100 flex-column" style={{background: "rgb(55, 226, 163)"}}>
      <h1 className="title">My Backpack</h1>
        <div className="d-flex flex-grow-1 m-3 p-1">
          <Sidebar
            addNewItem={addNewItem}/>
          <MainPocket 
            items={isItems}
            deleteItem={deleteItem}/>
        </div>
    </div>
  )
}