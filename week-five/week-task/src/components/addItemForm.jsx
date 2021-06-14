import { Container, Row, Col, Toast, Form, Button } from "react-bootstrap";
import { AppContext } from "./StateProvider";
import { useCookies } from "react-cookie";
import { useContext, useState, useEffect,useRef } from "react";

function AddItemForm() {
  const {
    showItemForm,
    toggleShow,
    itemToEdit,
    setItemToEdit,
    addListItem,editItem
  } = useContext(AppContext);

  //Current form value state
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [editMode, setEditMode] = useState(false);
  const [descInputError, setDescInputError] = useState("");
  const [cookies] = useCookies(["user"]);

  const titleRef=useRef();
  const qtyRef=useRef();
  const descRef=useRef();

  // Handle item to edit with use effect
  useEffect(() => {
    if (Object.keys(itemToEdit).length) {
      setTitle(itemToEdit.title);
      setQuantity(itemToEdit.quantity);
      setDescription(itemToEdit.description);
      setEditMode(true);
    }
  }, [itemToEdit]);

  const submitHandler = (e) => {
   
    //Gaurd for inputs
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem(cookies.user.email));
    const description=descRef.current.value;
    const quantity=qtyRef.current.value;
    const title=titleRef.current.value;


    if (
      description.trim().length < 10 ||
      quantity % 1 !== 0 ||
      quantity <= 0 ||
      title.trim().length < 3
    ) {
      setDescInputError(
        `List item title must be 3 letter above, quntity should be 
        whole numbers and description should be 10 characters above`
      );
      return false;
    }

    // Edit item
    if (editMode) {
      const itemID = itemToEdit.itemID;
      const index = itemToEdit.index;
      editItem({
        itemID,
        title,
        quantity,
        description,
        index,
      });

      setEditMode(false);
      setItemToEdit({});

      //Reset form
      setTitle();
      setQuantity();
      setDescription();
      return true;
    }
    // Return a random integer from 1 to 1000
    const random = Math.floor(Math.random() * 1000);
    const item={
      itemID: title + random,
      title,
      quantity,
      description,
    }
    if(!user.shoppingList){
      user.shoppingList=[];
    }
    user.shoppingList=[...user.shoppingList, item];
    // save the users data for accessing later
    localStorage.setItem(cookies.user.email, JSON.stringify(user));

    addListItem({...item})

    //Reset form
    setTitle();
    setQuantity();
    setDescription();
  };

  return (
    <Container className="mt-5">
      <Row
        id="addItem"
        className="d-flex justify-content-center align-items-center mt-5"
        noGutters
      >
        <Col sm={8}>
          <Toast
            className="myForm mt-5"
            show={showItemForm}
            onClose={toggleShow}
          >
            <Toast.Header>
              <h2>
                <strong className="mr-auto">Add Item</strong>
              </h2>
              <hr />
            </Toast.Header>

            <Toast.Body>
              <Form onSubmit={submitHandler} >
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12}>
                    <Form.Label>Item Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter title"
                      id="title"
                      name="title"
                      required
                      autoComplete="off"
                      value={title}
                      ref={titleRef}
                     
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6} sm={12}>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      placeholder="e.g 2"
                      type="number"
                      id="quantity"
                      name="quantity"
                      required
                      value={quantity}
                      ref={qtyRef}
                      
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Cooking items for the week"
                    id="description"
                    name="description"
                    required
                    value={description}
                    ref={descRef}
                  />
                </Form.Group>
                <span id="descriptionError" className="error">
                  {descInputError}
                </span>
                <Button variant="success" type="submit">
                  <i className="fas fa-plus icon" arial-hidden="true"></i>
                </Button>
              </Form>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}

export default AddItemForm;
