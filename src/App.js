import "./App.css";
import React, {useState, useEffect, createContext} from 'react';
import EnterAccount from './EnterAccount';
import Alert from 'react-bootstrap/Alert';
import Lists from './Lists';
import Footer from './Footer';
import Heading from './Heading';
const data=createContext();
export default function App() {
  const [toggleSubmit, setToggle]=useState(true);
  const [userList, setUserlist]=useState(() => {
    const savedTodos = localStorage.getItem("userList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [isEditItem, setIsEdit]=useState(null);
  const [editedItem, setEdited]=useState("");
  const [show, setShow] = useState(false);
  
  useEffect(()=>{
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const handleForm=(user, contact, date, account)=>{
    if(!toggleSubmit){
      setUserlist(userList.map((elem)=>{
        if(elem.id===isEditItem){
          return {...elem, onDate: date, from: account, paidTo: user, amount: parseFloat(contact).toFixed(2)}
        }
        return elem;
      }))
      setToggle(true);
    }else{
      if(user==="" && contact==="" && date === "" && account ===""){
        setShow(true);
      }else{
    const allInputData={id: new Date().getTime().toString(), onDate: date, from: account, paidTo: user, amount: parseFloat(contact).toFixed(2)};
    setUserlist([...userList, allInputData]);
    console.log(userList);
      }
  }
  }
  const handleEdit=(i)=>{
    const newEditItem=userList.find((elem)=>{
      return elem.id===i;
    });
    console.log(newEditItem);
    setToggle(false);
    setEdited(newEditItem);
    setIsEdit(i);
  }
  const handleDelete=(i)=>{
    const newTodos=[...userList];
    newTodos.splice(i, 1);
    setUserlist(newTodos);
  }
  return (
    <>
    <div className="App" style={{backgroundImage: 'linear-gradient(to top, rgba(255,0,0,0), rgba(148, 39, 245, 0.8))'}}>
      {(show)?
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>All fields are mendatory</Alert.Heading>
        <p>
          Please enter all the details...
        </p>
      </Alert>: ""}
      <Heading />
      <EnterAccount submitFun={handleForm} toggle={toggleSubmit} isEdit={editedItem}/>
      <data.Provider value={userList}>
      <Lists editFun={handleEdit} deleteFun={handleDelete}/>
      </data.Provider>
    </div>
    <Footer />
    </>
  );
}
export {data};