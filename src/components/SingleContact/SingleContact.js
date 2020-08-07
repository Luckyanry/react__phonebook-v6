import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/contacts/contactOperations";
import "./SingleContact.css";
import { getContactById } from "../../redux/contacts/contactsSelectors";

const SingleContact = ({ name, number, deleteContact }) => {
  return (
    <li className="Contact">
      <h4>{name}</h4>
      <p>{number}</p>
      <button className="DelBtn" type="button" onClick={deleteContact}>
        &#10008;
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = getContactById(state, ownProps.id);

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);

SingleContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};