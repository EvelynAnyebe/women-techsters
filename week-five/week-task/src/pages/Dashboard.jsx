import ViewShoppingList from "../components/viewShoppingList";
import AddItemForm from "../components/addItemForm";

function Dashboard() {
  return (
    <main className="dashboard">
      <AddItemForm />
      <ViewShoppingList />
    </main>
  );
}

export default Dashboard;
