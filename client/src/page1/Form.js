import { useState } from "react";
import { countryList } from "../data/countrylist";
import "./Page1.css";
function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (data.country === "0") {
      alert("Please select country");
      return;
    }
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div classNameName="App">
      <div class="login-root">
        <div
          class="box-root flex-flex flex-direction--column"
          style={{
            minHeight: "100vh",
            flexGrow: 1,
          }}
        >
          <div class="loginbackground box-background--white padding-top--64">
            <div class="loginbackground-gridContainer">
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "top / start / 8 / end",
                }}
              >
                <div
                  class="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "4 / 2 / auto / 5",
                }}
              >
                <div
                  class="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "6 / start / auto / 2",
                }}
              >
                <div
                  class="box-root box-background--blue800"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "7 / start / auto / 4",
                }}
              >
                <div
                  class="box-root box-background--blue animationLeftRight"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "8 / 4 / auto / 6",
                }}
              >
                <div
                  class="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "2 / 15 / auto / end",
                }}
              >
                <div
                  class="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "3 / 14 / auto / end",
                }}
              >
                <div
                  class="box-root box-background--blue animationRightLeft"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "4 / 17 / auto / 20",
                }}
              >
                <div
                  class="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                class="box-root flex-flex"
                style={{
                  gridArea: "5 / 13 / auto / 17",
                }}
              >
                <div
                  class="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
            </div>
          </div>
          <div
            class="box-root padding-top--24 flex-flex flex-direction--column"
            style={{
              flexGrow: 1,
              zIndex: 9,
            }}
          >
            <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>Valuepitch(Page 1)</h1>
            </div>
            <div class="formbg-outer">
              <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                  <form id="" onSubmit={handleFormSubmit}>
                    <div class="field padding-bottom--24">
                      <label htmlFor="name">Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="field padding-bottom--24">
                      <label htmlFor="email">Email *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="field padding-bottom--24">
                      <label htmlFor="dob">DOB *</label>
                      <input
                        required
                        type="date"
                        name="dob"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="field padding-bottom--24">
                      <label htmlFor="address">Address *</label>
                      <textarea
                        required
                        type="text"
                        name="address"
                        style={{
                          height: "50px",
                          width: "100%",
                          maxWidth: "400px",
                        }}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="field padding-bottom--24">
                      <label htmlFor="country">Country *</label>
                      <select
                        name="country"
                        style={{
                          height: "40px",
                          width: "100%",
                          border: "1px solid gray",
                        }}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="0">Select Country</option>
                        {countryList?.map((item, index) => {
                          return (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div class="field padding-bottom--24">
                      <input type="submit" name="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
