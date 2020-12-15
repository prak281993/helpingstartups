import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import "./Checkout.scss";

function Checkout() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });
  let user = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const session = await Auth.currentAuthenticatedUser();
      if (session) {
        user = {
          email: session.attributes.email,
          phoneNumber: session.attributes.phone_number,
        };
      }
      setFormData((prev) => {
        return {
          ...prev,
          email: user.email,
          contactNumber: user.phoneNumber,
        };
      });
    })();
  }, []);

  const handleChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };

  const loadRazorPay = async (e) => {
    e.preventDefault();
    const purchaseData = JSON.parse(localStorage.getItem("purchaseData"));
    const resp = await API.post("helpingstartups", "/hs/purchase", {
      body: {
        amount: purchaseData.price,
      },
    });
    const { id, amount } = resp.order;
    var options = {
      key: "rzp_test_FY4g68O83WkmLi", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      description: purchaseData.plan,
      image: "/assets/money.png",
      order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        history.push(`/${purchaseData.service}`);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        email: user.email,
        contact: user.phoneNumber,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };
  return (
    <div className="container checkout-screen">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
        <p className="lead">
          Please fill in the below details to continue purchase
        </p>
      </div>

      <div className="row display-flex justify-content-center align-items-center">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing Information</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                  name="firstName"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                  name="lastName"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                required
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label for="contactNumber">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="contactNumber"
                placeholder="+919999999999"
                required
                name="contactNumber"
                onChange={handleChange}
                value={formData.contactNumber}
              />
              <div className="invalid-feedback">
                Please enter a valid contact number.
              </div>
            </div>
            <hr className="mb-4" />
            <button
              onClick={loadRazorPay}
              className="btn btn-primary btn-lg btn-block"
              type="submit"
            >
              Continue to checkout
            </button>
          </form>
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017-2019 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default withAuthenticator(Checkout);
