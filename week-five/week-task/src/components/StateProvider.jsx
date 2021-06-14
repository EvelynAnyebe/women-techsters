/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const AppContext = createContext();

const initialState = {
  isLoggedIn: false,
};

export default function StateProvider({ children }) {
  const [appData, setAppData] = useState(initialState);
  const [showItemForm, setItemFormShow] = useState(false);
  const [ itemToEdit, setItemToEdit ] = useState({});
  const [list, setList] = useState([]);
  const paths = ["/login", "/register"];
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleSetCookie(data) {
    setCookie(
      "user",
      { email: data.email, userId: data.userId },
      { path: "/" }
    );
  }

  function handleRemoveCookie() {
    removeCookie("user");
  }

  const toggleShow = () => {
    setItemFormShow(!showItemForm);
  };

  const addListItem = (item) => {
    let lastIndex = list.length;
    item.index = lastIndex;
    setList([...list, item]);
  };

  const editItem = (item) => {
    const newList=list;
    newList[item.index]=item;
    console.log(newList);
    setList(newList);
  };

  useEffect(() => {
    if (appData.isLoggedIn) {
      const user = JSON.parse(localStorage.getItem(cookies.user.email));
      console.log(user.shoppingList);
      setList(user.shoppingList);
    }
  }, [appData]);

  return (
    <AppContext.Provider
      value={{
        state: appData,
        setState: setAppData,
        showItemForm,
        toggleShow,
        cookies,
        handleSetCookie,
        handleRemoveCookie,
        paths,
        itemToEdit, setItemToEdit,
        list,
        addListItem,editItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
