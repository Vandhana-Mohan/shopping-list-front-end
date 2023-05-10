import GroceryEditForm from "../components/GroceryEditForm";

function Edit() {
  return (
    <div className="shadow-lg rounded-lg items-center p-6 m-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6">
        Edit items from your cart ...{" "}
      </h1>
      <GroceryEditForm />
    </div>
  );
}

export default Edit;
