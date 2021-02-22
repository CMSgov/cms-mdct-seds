import React from "react";
import StatusButton from "./StatusButton";
import {
  Accordion,
  Alert,
  Button,
  Grid,
  GridContainer
} from "@trussworks/react-uswds";

// FontAwesome / Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

// Tabs
import "react-tabs/style/react-tabs.css";
import TabContainer from "./layout/TabContainer";

import GridWithTotals from "./GridWithTotals/GridWithTotals";

import { Modal, useModal } from "@trussworks/react-uswds";

const Example = () => {
  /** Example of Modal Component Using Hooks */
  const { isOpen, openModal, closeModal } = useModal();

  const TestModal = ({ onClose, children }) => (
    <Modal
      title={<h2>Test Modal</h2>}
      actions={
        <>
          <Button type="button" outline onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </>
      }
    >
      {children}
    </Modal>
  );

  let accordionItems = [
    {
      id: 1,
      description: "Settings description",
      title: "Settings 1",
      content: "Here is the content"
    },
    {
      id: 2,
      description: "Settings 2 description",
      title: "Settings 2",
      content: "Here is the content for settings 2"
    },
    {
      id: 3,
      description: "Settings 3 description",
      title:
        "Settings 3 is a longer title, in fact, much longer than the others",
      content:
        "Here is the content for settings 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt pulvinar orci ut sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer congue magna eget eleifend sagittis. Fusce consequat facilisis semper. Mauris luctus justo non diam finibus scelerisque sit amet eu ipsum. Aliquam faucibus, orci eu malesuada cursus, tortor neque feugiat risus, nec suscipit urna velit sit amet risus. Nullam ut neque et enim euismod malesuada a condimentum magna. Sed mattis dapibus lectus, a egestas lectus ullamcorper eget. Nulla at neque vestibulum, bibendum arcu eget, rutrum tortor. In hac habitasse platea dictumst. Quisque pulvinar iaculis pulvinar. Donec blandit nunc at ultrices commodo. Aenean non molestie neque."
    }
  ];

  const gridDataItems = [
    {
      col1: "",
      col2: "% of FPL 0-133",
      col3: "% of FPL 134-200",
      col4: "% of FPL 201-250",
      col5: "% of FPL 251-300",
      col6: "% of FPL 301-317"
    },
    {
      col1: "A. Fee-for-Service",
      col2: 1,
      col3: 2,
      col4: 3,
      col5: 4,
      col6: 5
    },
    {
      col1: "B. Managed Care Arrangements",
      col2: 21,
      col3: 22,
      col4: 23,
      col5: 24,
      col6: 25
    },
    {
      col1: "C. Primary Care Case Management",
      col2: 26,
      col3: 27,
      col4: 28,
      col5: 29,
      col6: 30
    }
  ];

  return (
    <GridContainer className="status-buttons container">
      <Grid row>
        <Grid col={12}>
          <h2>Status Buttons</h2>
          <StatusButton type="inprogress" />
          <StatusButton type="complete" />
          <StatusButton type="provisional" />
          <StatusButton type="final" />
          <StatusButton type="notstarted" />
          <StatusButton type="notapplicable" />
        </Grid>
      </Grid>
      <Grid row>
        <Grid col={12}>
          <h2>Regular Buttons</h2>
          <Button>Submit</Button>
          <Button className="hollow">Save</Button>
        </Grid>
      </Grid>
      <Grid row>
        <Grid col={12}>
          <h2>Icons</h2>
          PDF <FontAwesomeIcon icon={faFilePdf} /> <br />
          Arrow Left <FontAwesomeIcon icon={faArrowLeft} />
          <br />
          Arrow Right <FontAwesomeIcon icon={faArrowRight} />
        </Grid>
      </Grid>
      <Grid row>
        <Grid col={12}>
          <h2>Alerts</h2>
          <Alert type="success" heading="Success status">
            Success Message contents
          </Alert>
          <Alert type="warning" heading="Warning status">
            Warning Message contents
          </Alert>
          <Alert type="error" heading="Error status">
            Error Message contents
          </Alert>
          <Alert type="info" heading="Info status">
            Info Message contents
          </Alert>
        </Grid>
      </Grid>
      <Grid row>
        <Grid col={12}>
          <h2>Tabs</h2>
          <TabContainer />
        </Grid>
        <Grid row>
          <Grid col={12}>
            <h2>Accordion / FAQ's</h2>
            <Accordion bordered={true} items={accordionItems} />
          </Grid>
        </Grid>
      </Grid>
      <Grid row={true}>
        <GridWithTotals gridData={gridDataItems} />
      </Grid>
      <Grid row={true}>
        <Button type="button" onClick={openModal}>
          Click to Open Modal
        </Button>
      </Grid>
      <Grid>
        <TestModal isOpen={isOpen} onClose={closeModal}>
          <p>This is a modal that uses hooks!</p>
        </TestModal>
      </Grid>
    </GridContainer>
  );
};

export default Example;
