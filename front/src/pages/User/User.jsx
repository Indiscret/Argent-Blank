import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateUser } from "../../services/apiService";
import Account from "../../components/Account/Account";

function User() {
  const [update, setUpdate] = useState(false);
    const { token, firstName, lastName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);

    const handleError = (error) => {
      console.error(error);
    }

    const handleValid = (message) => {
      console.log(message);
    }

    useEffect(() => {
        fetchUser(token, dispatch)
    }, [token, dispatch]);

    const handleEdit = () => {
      try {
        updateUser(
          {
            firstName: newFirstName ? newFirstName : firstName,
            lastName: newLastName ? newLastName : lastName,
          },
          dispatch,
          token,
        );
        handleValid("User successfully updated !");
        setUpdate(false);
      } catch (err) {
        handleError(err.message);
      }
    };


    return (
      <main className="main bg-dark">
      {!update ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${firstName}  ${lastName}`}!
          </h1>
          <button className="edit-button" onClick={() => setUpdate(true)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            <input
              type="text"
              name="firstName"
              placeholder={firstName}
              className="update-inputs"
              onChange={(e) => {
                setNewFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder={lastName}
              className="update-inputs"
              onChange={(e) => {
                setNewLastName(e.target.value);
              }}
            />
          </h1>
          <button
            className="save-button double-btn"
            onClick={() => {
              handleEdit();
            }}
          >
            Save
          </button>
          <button
            className="cancel-button double-btn"
            onClick={() => {
              setUpdate(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
        <Account/>
      </main>
    )
};

export default User;