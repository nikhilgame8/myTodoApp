import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const EnterAccount = (prop) => {
  const [user, setUser] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  
  useEffect(()=>{
    if(prop.toggle===false){
      setUser(prop.isEdit.paidTo);
      setContact(prop.isEdit.amount);
      setDate(prop.isEdit.onDate);
      setAccount(prop.isEdit.account);
    }
    else{
      setUser("");
      setContact("");
      setDate("");
      setAccount("");
    }
  }, [prop.toggle]);

  return (
    <Card
      body
      className="mx-auto"
      style={{ backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0), rgba(104, 90, 206, 0.4))', width: "18rem" }}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          prop.submitFun(user, contact, date, account);
          setUser("");
          setContact("");
          setAccount("");
          setDate("");
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <select value={account} style={{borderRadius: "8px", marginBottom: "10px", border: "none"}} onChange={(e) => setAccount(e.target.value)}>
          <option disabled defaultValue={"Online Banking"}>
            Select Account
          </option>
          <option value="Online Banking">Online Banking</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
        </select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Paid To</Form.Label>
          <Form.Control
            type="text"
            value={user}
            placeholder="Paid To"
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={contact}
            placeholder="Enter Amount"
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Group>
        {prop.toggle ? (
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        ) : (
          <Button variant="outline-dark" type="submit">
            Update
          </Button>
        )}
      </Form>
    </Card>
  );
};
export default EnterAccount;
