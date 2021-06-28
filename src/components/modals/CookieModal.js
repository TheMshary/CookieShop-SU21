import Modal from "react-modal";

//state
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";
import cookieStore from "../../stores/cookieStore";

const CookieModal = (props) => {
  const [cookie, setCookie] = useState(
    //vvvvv
    props.oldCookie
      ? props.oldCookie
      : //^^^^^
        {
          name: "",
          price: 0,
          description: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.oldCookie) cookieStore.cookieUpdate(cookie);
    else cookieStore.cookieCreate(cookie);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Cookie Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                value={cookie.name}
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
                value={cookie.price}
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
              value={cookie.description}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
              value={cookie.image}
            />
          </div>
          <CreateButtonStyled>
            {props.oldCookie ? "Update" : "Add"}
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default CookieModal;
