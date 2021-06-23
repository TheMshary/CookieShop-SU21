import Modal from "react-modal";

//state
import { useState } from "react";

const CookieModal = (props) => {
  const [cookie, setCookie] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value });
    console.log(cookie);
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Cookie Modal"
      >
        <form>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                min="1"
                onChange={handleChange}
                name="price"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CookieModal;
