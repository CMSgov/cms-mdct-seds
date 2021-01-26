import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Grid, GridContainer } from "@trussworks/react-uswds";
import { TextField } from "@cmsgov/design-system-core";
import MultiSelect from "react-multi-select-component";
import PropTypes from "prop-types";
import Searchable from "react-searchable-dropdown";

/**
 * View/edit a single user with options
 *
 * @constructor
 */

const UserEdit = ({ stateList }) => {
  // Get params from url
  let { id } = useParams();

  // Set up local state
  const [user, setUser] = useState();
  const [states, setStates] = useState();
  const [role, setRole] = useState();
  const [isActive, setIsActive] = useState();
  /* eslint-disable no-unused-vars */
  const [statesToSend, setStatesToSend] = useState("null");

  // Save selections for local use and API use
  const setStatesFromArray = (option, simple = false) => {
    // Save for API use
    let states = "";
    if (option) {
      if (simple) {
        states = option.join("-");
      } else {
        let first_iteration = true;
        // Create hyphen separated string of state abbreviations
        option.forEach(item => {
          if (first_iteration) {
            states += item.value;
            first_iteration = false;
          } else {
            states += "-" + item.value;
          }
        });
      }
    }
    if (!states) {
      states = "null";
    }
    setStatesToSend(states);
  };

  // Get User data
  const loadUserData = async () => {
    // let { data } = await axios.get(`/api/v1/user/${id}`);
    // setUser(data[0]);
    // setStates(userStatesRefined(data[0].state_codes));
    // setStatesFromArray(data[0].state_codes, true);
    // setRole(data[0].user_role);
    const data = [
      {
        user_id: 0,
        password: "",
        is_superuser: true,
        username: "WAQF",
        first_name: "Alexis",
        last_name: "Woodbury",
        email: "awoodbury@collabralink.com",
        is_active: true,
        date_joined: "01/22/2021",
        last_login: "01/22/2021",
        states: ["AZ"],
        role: "admin"
      }
    ];
    setUser(data[0]);
    setRole(data[0].role);
  };

  // When stateList is rendered, call for User data
  useEffect(() => {
    loadUserData();
  }, [stateList]);

  const roles = [
    { value: "admin", label: "Admin User" },
    { value: "business", label: "Business User" },
    { value: "state", label: "State User" }
  ];

  const statuses = [
    { value: true, label: "Active" },
    { value: false, label: "Deactivated" }
  ];

  // Update user object
  const updateLocalUser = (e, field) => {
    let tempUser = { ...user };
    let response;

    if (field === "state_codes") {
      // If from multiselect, else single selection
      if (Array.isArray(e)) {
        response = userStatesSimplified(e);
        // Format for URI use
        setStatesFromArray(e);
      } else {
        if (!e.value) {
          e.value = "null";
        }
        setStatesToSend(e.value);
        response = e.value;
      }

      // Write to local state
      setStates(e);
    } else if (field === "user_role") {
      // Save to local state
      setRole(e.value);
      setStatesToSend("null");
      setStates("");
      // Update user
      response = e.value;
    } else if (field === "is_active") {
      response = e.value;
      if (e.value) {
        setIsActive("True");
      } else {
        setIsActive("False");
      }
    } else {
      response = e.target.value;
    }
    tempUser[field] = response;
    setUser(tempUser);
  };

  // Convert to comma separated string
  const userStatesSimplified = states => {
    let response = [];
    states.forEach(state => {
      response.push(state.value);
    });
    response.sort();
    return response.join(",");
  };

  // Convert to object based on stateList entries
  /* eslint-disable no-unused-vars */
  const userStatesRefined = states => {
    let refined = [];
    if (stateList && states) {
      states.forEach(e => {
        stateList.forEach(state => {
          if (e === state.value) {
            refined.push(state);
          }
        });
      });
    }
    return refined.sort();
  };

  const getStatus = status => {
    if (status) {
      return true;
    }
    return false;
  };

  const updateUser = async user => {
    // const xhrURL = [
    //   window.env.API_POSTGRES_URL,
    //   `/api/v1/user/update/${user.id}/${statesToSend}/${user.user_role}/${user.is_active}`
    // ].join("");
    // eslint-disable-next-line
    // await axios.get(xhrURL).then(result2 => {
    //   window.alert(result2.data.message);
    //   window.location.reload(false);
    // });
  };

  return (
    <div className="edit-user ds-l-col--6">
      <GridContainer className="container">
        <Grid row>
          <Grid col={12}>
            <a href="/users">&laquo; Back to User List</a>
            <h1>Edit User</h1>
            {user ? (
              <>
                <div className="textfield">
                  <TextField
                    value={user.username}
                    type="text"
                    label="Username"
                    onChange={e => updateLocalUser(e, "username")}
                    disabled={true}
                  />
                </div>
                <div className="textfield">
                  <TextField
                    value={user.first_name}
                    type="text"
                    label="First Name"
                    onChange={e => updateLocalUser(e, "first_name")}
                    disabled={true}
                  />
                </div>
                <div className="textfield">
                  <TextField
                    value={user.last_name}
                    type="text"
                    label="Last Name"
                    onChange={e => updateLocalUser(e, "last_name")}
                    disabled={true}
                  />
                </div>
                <div className="textfield">
                  <TextField
                    value={user.email}
                    type="text"
                    label="Email"
                    onChange={e => updateLocalUser(e, "email")}
                    disabled={true}
                  />
                </div>
                <div className="dropdown">
                  <>
                    <label className="ds-c-label">Role</label>
                    <Searchable
                      options={roles}
                      placeholder="Select a Role"
                      onSelect={e => updateLocalUser(e, "user_role")}
                      value={role ? role : user.user_role}
                    />
                  </>
                </div>
                <div className="dropdown">
                  {role === "state" ? (
                    <>
                      <label className="ds-c-label">State</label>
                      <br />
                      <Searchable
                        options={stateList}
                        multiple={true}
                        placeholder="Select a State"
                        onSelect={e => updateLocalUser(e, "state_codes")}
                      />
                    </>
                  ) : null}
                  {role !== "state" && role !== null ? (
                    <>
                      <label className="ds-c-label">State Multi</label>
                      <MultiSelect
                        options={stateList}
                        // value={states}
                        onChange={e => updateLocalUser(e, "state_codes")}
                        labelledBy={"Select States"}
                        multiple={false}
                      />
                    </>
                  ) : null}
                </div>
                <div className="dropdown">
                  <>
                    <label className="ds-c-label">Status</label>
                    <Searchable
                      options={statuses}
                      multiple={false}
                      placeholder="Select a State"
                      onSelect={e => updateLocalUser(e, "is_active")}
                      value={isActive ? isActive : getStatus(user.is_active)}
                    />
                  </>
                </div>
                <br />
                <Button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => updateUser(user)}
                >
                  Update User
                </Button>
              </>
            ) : (
              `Cannot find user with id ${id}`
            )}
          </Grid>
        </Grid>
      </GridContainer>
    </div>
  );
};

UserEdit.propTypes = {
  stateList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // stateList: state.allStatesData.map(element => {
  //   return { label: element.name, value: element.code };
  // })
  stateList: [
    { label: "Alabama", value: "AL" },
    { label: "Maryland", value: "MD" }
  ]
});

export default connect(mapStateToProps)(UserEdit);
