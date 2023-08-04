import PropTypes from "prop-types";
import iconList from "../assets/images/icon-list.svg";

export const Success = ({ email }) => {
  return (
    <>
    <div className="containerContainerSuccess">
      <div className="containerSuccess">
        <img className="check" src={iconList} alt="iconList" />
        <p className="Thanksforsubscribing">Thanks for subscribing!</p>

        <p className="confirmEmailtext">
          A confirmation email has been sent to <b>{email}</b> please open it
          and click the button inside to confirm your subscription.
        </p>

        <button className="dismissMessage">Dismiss message</button>

      </div>
    </div>
    </>
  );
};

Success.propTypes = {
  email: PropTypes.email,
};
