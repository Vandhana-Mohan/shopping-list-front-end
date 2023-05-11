import GroceryEditForm from "../components/GroceryEditForm";

function Edit() {
  return (
    <div className="rounded-lg items-center p-6 m-6 justify-center shadow-green-500/50 border shadow-md">
      <h1 className="text-4xl font-bold mb-6">
        Edit items from your cart ...{" "}
      </h1>
      <GroceryEditForm />
    </div>
  );
}

export default Edit;
