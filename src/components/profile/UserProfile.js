import React, {useState} from 'react';
import {Alert, Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import EditUserProfile from "./EditUserProfile";

const UserProfile = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Alert color="warning">
        Go To {' '}
        <a
          className="alert-link"
          href="http://localhost:3000/"
          rel="noreferrer"
          target="_blank"
        >
          Home Page
        </a>
      </Alert>
      <div className="col-4">
        <Card
          style={{
            width: '25rem'

          }}
        >
          <img
            alt="Sample"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          />
          <CardBody>
            <CardTitle tag="h5">
              First Name & Last Name
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              📬 E-mail
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              📞 Phone Number
            </CardSubtitle>
            <CardText>
              🏠 Address
            </CardText>
            <Button type="button" className="btn btn-outline-warning" onClick={toggle}>
              📝 Edit Profile
            </Button>
            {modal && <EditUserProfile
              modal={modal}
              toggle={toggle}
            />}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
