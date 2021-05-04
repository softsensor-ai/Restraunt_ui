import React from 'react'

const userProfile = () => {
    return (
        <div className="ms-content-wrapper">

        <div className="ms-profile-overview">
        <div className="ms-profile-cover">
            <img className="ms-profile-img" src="../../assets/img/costic/customer-5.jpg" alt="people"/>
            <div className="ms-profile-user-info">
            <h4 className="ms-profile-username text-white">Chihoo Hwang</h4>
            <h2 className="ms-profile-role">Professional Cheff</h2>
            </div>
            <div className="ms-profile-user-buttons">
            <a href="#" className="btn btn-primary"> <i className="material-icons">person_add</i> Follow</a>
            <a href="#" className="btn btn-light"> <i className="material-icons">file_download</i> Download Resume</a>
            </div>
        </div>
        <ul className="ms-profile-navigation nav nav-tabs tabs-bordered" role="tablist">
            <li role="presentation"><a href="#tab1" aria-controls="tab1" className="active show" role="tab" data-toggle="tab"> Overview </a></li>
            <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab"> Professional Skills </a></li>
            <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab"> Portfolio </a></li>
        </ul>
        <div className="tab-content">
            <div className="tab-pane" id="tab1">

            </div>
            <div className="tab-pane" id="tab2">

            </div>
            <div className="tab-pane" id="tab3">

            </div>
        </div>
        </div>

        <div className="row">

        <div className="col-xl-7 col-md-12">
            <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-body">
                <h2 className="section-title">About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                </p>

                <div className="ms-profile-skills">
                <h2 className="section-title">Professional Skills</h2>
                <ul className="ms-skill-list">
                    <li className="ms-skill">Web Design</li>
                    <li className="ms-skill">Development</li>
                    <li className="ms-skill">Interface Design</li>
                    <li className="ms-skill">Illustration</li>
                    <li className="ms-skill">Brand Design</li>
                    <li className="ms-skill">Adobe</li>
                </ul>
                </div>

            </div>

            </div>
        </div>
        <div className="col-xl-5 col-md-12">
            <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-body">
                <ul className="ms-profile-stats">
                <li>
                    <h3 className="ms-count">5790</h3>
                    <span>Followers</span>
                </li>
                <li>
                    <h3 className="ms-count">4.8</h3>
                    <span>User Rating</span>
                </li>
                </ul>
                <h2 className="section-title">Basic Information</h2>
                <table className="table ms-profile-information">
                <tbody>
                    <tr>
                    <th scope="row">Full Name</th>
                    <td>Chihoo Hwang</td>
                    </tr>
                    <tr>
                    <th scope="row">Birthday</th>
                    <td>January 25th, 1996</td>
                    </tr>
                    <tr>
                    <th scope="row">Language</th>
                    <td>English (US)</td>
                    </tr>
                    <tr>
                    <th scope="row">Website</th>
                    <td>www.example.com</td>
                    </tr>
                    <tr>
                    <th scope="row">Phone Number</th>
                    <td>+123 456 789</td>
                    </tr>
                    <tr>
                    <th scope="row">Email Address</th>
                    <td>example@mail.com</td>
                    </tr>
                    <tr>
                    <th scope="row">Location</th>
                    <td>New York, USA</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>

        <div className="col-md-12">
            <div className="ms-panel">
            <div className="ms-panel-body">
                <h2 className="section-title">Cheffs on Dutty</h2>
                <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="media ms-profile-experience">
                    <div className="mr-2 align-self-center">
                        <img src="../../assets/img/costic/customer-1.jpg" className="ms-img-round ms-img-small" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h4>Mike Labinstine</h4>
                        <p>January 2020 to Present</p>
                        <p>Veg Cook</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="media ms-profile-experience">
                    <div className="mr-2 align-self-center">
                        <img src="../../assets/img/costic/customer-2.jpg" className="ms-img-round ms-img-small" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h4>George Labinstin</h4>
                        <p>January 2013 to Present</p>
                        <p>Meat Cook</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="media ms-profile-experience">
                    <div className="mr-2 align-self-center">
                        <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round ms-img-small" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h4>Jessy Doe</h4>
                        <p>January 2020 to Present</p>
                        <p>Top Cheff</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="media ms-profile-experience">
                    <div className="mr-2 align-self-center">
                        <img src="../../assets/img/costic/customer-4.jpg" className="ms-img-round ms-img-small" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h4>Jessica Doe</h4>
                        <p>January 2013 to Present</p>
                        <p>Night Cheff</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="media ms-profile-experience">
                    <div className="mr-2 align-self-center">
                        <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round ms-img-small" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h4>Jhone Doe</h4>
                        <p>January 2020 to Present</p>
                        <p>The Cheff</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="media ms-profile-experience">
                    <div className="mr-2 align-self-center">
                        <img src="../../assets/img/costic/customer-6.jpg" className="ms-img-round ms-img-small" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h4>Manti Jhoe</h4>
                        <p>January 2020 to Present</p>
                        <p>Quality Control</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="col-xl-6 col-md-12">
            <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-body">
                <h2 className="section-title">Skill level</h2>
                <span className="progress-label">Web Design</span><span className="progress-status">83%</span>
                <div className="progress progress-tiny">
                <div className="progress-bar bg-primary" role="progressbar" style={{width:" 83%"}} aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="progress-label">Development</span><span className="progress-status">50%</span>
                <div className="progress progress-tiny">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="progress-label">Interface Design</span><span className="progress-status">75%</span>
                <div className="progress progress-tiny">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="progress-label">Illustration</span><span className="progress-status">92%</span>
                <div className="progress progress-tiny">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "92%"}} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="progress-label">Brand Design</span><span className="progress-status">97%</span>
                <div className="progress progress-tiny">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "97%"}} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="progress-label">Adobe</span><span className="progress-status">90%</span>
                <div className="progress progress-tiny">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-xl-6 col-md-12">
            <div className="ms-panel">
            <div className="ms-panel-body">
                <h2 className="section-title">My Timeline</h2>
                <ul className="ms-activity-log">
                <li>
                    <div className="ms-btn-icon btn-pill icon btn-success">
                    <i className="flaticon-tick-inside-circle"></i>
                    </div>
                    <h6>Computer Science Degree</h6>
                    <span> <i className="material-icons">event</i>1 January, 2018</span>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                </li>
                <li>
                    <div className="ms-btn-icon btn-pill icon btn-info">
                    <i className="flaticon-information"></i>
                    </div>
                    <h6>Landed first Job</h6>
                    <span> <i className="material-icons">event</i>4 March, 2018</span>
                    <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                </li>
                <li>
                    <div className="ms-btn-icon btn-pill icon btn-success">
                    <i className="flaticon-tick-inside-circle"></i>
                    </div>
                    <h6>Started my own Company</h6>
                    <span> <i className="material-icons">event</i>1 March, 2020</span>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div className="col-md-12">
            <div className="ms-panel">
            <div className="ms-panel-body">
                <h2 className="section-title">Your Latest Posts</h2>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card">
                    <div className="ms-card-body">
                        <div className="media fs-14">
                        <div className="mr-2 align-self-center">
                            <img src="../../assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people"/>
                        </div>
                        <div className="media-body">
                            <h6>John Doe </h6>
                            <div className="dropdown float-right">
                            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="material-icons">more_vert</i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="ms-dropdown-list">
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Comment</span>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Share</span>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Favorite</span>
                                    </div>
                                </a>
                                </li>
                            </ul>
                            </div>
                            <p className="fs-12 my-1 text-disabled">30 seconds ago</p>
                        </div>

                        </div>
                        <h6 className="fw-6">This is a card Title</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                    </div>
                    <div className="ms-card-img">
                        <img src="../../assets/img/costic/food-3.jpg" alt="card_img"/>
                    </div>
                    <div className="ms-card-footer text-disabled d-flex">
                        <div className="ms-card-options">
                        <i className="material-icons">favorite</i> 982
                        </div>
                        <div className="ms-card-options">
                        <i className="material-icons">comment</i> 785
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card">
                    <div className="ms-card-body">
                        <div className="media fs-14">
                        <div className="mr-2 align-self-center">
                            <img src="../../assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people"/>
                        </div>
                        <div className="media-body">
                            <h6>John Doe </h6>
                            <div className="dropdown float-right">
                            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="material-icons">more_vert</i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="ms-dropdown-list">
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Comment</span>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Share</span>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Favorite</span>
                                    </div>
                                </a>
                                </li>
                            </ul>
                            </div>
                            <p className="fs-12 my-1 text-disabled">30 seconds ago</p>
                        </div>

                        </div>
                        <h6 className="fw-6">This is a card Title</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                    </div>
                    <div className="ms-card-img">
                        <img src="../../assets/img/costic/food-6.jpg" alt="card_img"/>
                    </div>
                    <div className="ms-card-footer text-disabled d-flex">
                        <div className="ms-card-options">
                        <i className="material-icons">favorite</i> 982
                        </div>
                        <div className="ms-card-options">
                        <i className="material-icons">comment</i> 785
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card">
                    <div className="ms-card-body">
                        <div className="media fs-14">
                        <div className="mr-2 align-self-center">
                            <img src="../../assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people"/>
                        </div>
                        <div className="media-body">
                            <h6>John Doe </h6>
                            <div className="dropdown float-right">
                            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="material-icons">more_vert</i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="ms-dropdown-list">
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Comment</span>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Share</span>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                    <span>Favorite</span>
                                    </div>
                                </a>
                                </li>
                            </ul>
                            </div>
                            <p className="fs-12 my-1 text-disabled">30 seconds ago</p>
                        </div>

                        </div>
                        <h6 className="fw-6">This is a card Title</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                    </div>
                    <div className="ms-card-img">
                        <img src="../../assets/img/costic/food-1.jpg" alt="card_img"/>
                    </div>
                    <div className="ms-card-footer text-disabled d-flex">
                        <div className="ms-card-options">
                        <i className="material-icons">favorite</i> 982
                        </div>
                        <div className="ms-card-options">
                        <i className="material-icons">comment</i> 785
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        </div>


    </div>
    )
}

export default userProfile
