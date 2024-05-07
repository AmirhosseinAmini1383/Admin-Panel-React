import { useState } from "react";
import { createContext } from "react";

export const CategoryContext = createContext({
  editId: null,
  setEditId: () => {},
});

const CategoryContextContainer = ({ children }) => {
  const [editId, setEditId] = useState(null);
  return (
    <CategoryContext.Provider value={{ editId, setEditId }}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryContextContainer;
