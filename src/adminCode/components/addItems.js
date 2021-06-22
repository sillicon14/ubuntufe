import React, { useState } from "react";
import "./addItems.css";
import Input from "./formInput";

const AddItem = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");

  const submitHandle = (evt) => {
    evt.preventDefault();
    var obj = [
      { name: name },
      { image: image },
      { brand: brand },
      { category: category },
      { description: description },
      { price: price },
      { countInStock: countInStock },
    ];
    console.log(obj);
    props.history.push("/");
  };

  return (
    <div>
      <h2>Add an Item:</h2>
      <div className="admin-container">
        <form onSubmit={(evt) => submitHandle(evt)}>
          <div>
            <Input name="name" label="Name:" value={name} set={setName} />
            <Input name="image" label="Image:" value={image} set={setImage} />
            <Input name="brand" label="Brand:" value={brand} set={setBrand} />
            <Input
              name="category"
              label="Category:"
              value={category}
              set={setCategory}
            />
            <Input name="price" label="Price:" value={price} set={setPrice} />
            <Input
              name="countInStock"
              label="count_in_stock"
              value={countInStock}
              set={setCountInStock}
            />
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="description">Description:</label>
            </div>
            <div className="col-75">
              <textarea
                id="description"
                name="descripton"
                placeholder="Description"
                onChange={(evt) => setDescription(evt.target.value)}
                value={description}
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
