import React, {useState} from 'react';
import './profile.css'

const UserProfile = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (

    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt="" />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>
                Kshiti Ghelani
              </h5>
              <h6>
                Web Developer and Designer
              </h6>
              <p className="proile-rating">RANKINGS : <span>8/10</span></p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                     aria-controls="home" aria-selected="true">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                     aria-controls="profile" aria-selected="false">Timeline</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a><br />
              <a href="">Bootsnipp Profile</a><br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a><br />
              <a href="">Web Developer</a><br />
              <a href="">WordPress</a><br />
              <a href="">WooCommerce</a><br />
              <a href="">PHP, .Net</a><br />
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>Kshiti123</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>Kshiti Ghelani</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>kshitighelani@gmail.com</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>Web Developer and Designer</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label><br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    // <div>
    //   <Alert color="warning">
    //     Go To {' '}
    //     <a
    //       className="alert-link"
    //       href="http://localhost:3000/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       Home Page
    //     </a>
    //   </Alert>
    //   <div className="col-4">
    //     <Card
    //       style={{
    //         width: '25rem'
    //
    //       }}
    //     >
    //       <img
    //         alt="Sample"
    //         src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
    //       />
    //       <CardBody>
    //         <CardTitle tag="h5">
    //           First Name & Last Name
    //         </CardTitle>
    //         <CardSubtitle
    //           className="mb-2 text-muted"
    //           tag="h6"
    //         >
    //           📬 E-mail
    //         </CardSubtitle>
    //         <CardSubtitle
    //           className="mb-2 text-muted"
    //           tag="h6"
    //         >
    //           📞 Phone Number
    //         </CardSubtitle>
    //         <CardText>
    //           🏠 Address
    //         </CardText>
    //         <Button type="button" className="btn btn-outline-warning" onClick={toggle}>
    //           📝 Edit Profile
    //         </Button>
    //         {modal && <EditUserProfile
    //           modal={modal}
    //           toggle={toggle}
    //         />}
    //       </CardBody>
    //     </Card>
    //   </div>
    // </div>
  );
};

export default UserProfile;
