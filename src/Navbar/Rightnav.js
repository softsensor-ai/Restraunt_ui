import React, { useState } from 'react'
import '../assets/vendors/iconic-fonts/font-awesome/css/all.min.css'


const Rightnav = () => {
    const [drk,setdrk] = useState(true)
    const [rmvquickbar,setrmvquickabr]=useState(false)
    
    //adding dark mode theme
    const darkmode = () =>{
        drk?document.getElementById('main').classList.add('ms-dark-theme'):document.getElementById('main').classList.remove('ms-dark-theme');
        setdrk(!drk);
    }

    //removing quickbar from right nav
    const removequickbar = () =>{
        rmvquickbar?document.getElementById('main').classList.add('ms-has-quickbar'):document.getElementById('main').classList.remove('ms-has-quickbar');
        setrmvquickabr(!rmvquickbar);
    }

    // displaying right nav bar list
    const showrightnav = () =>{
        document.getElementById('ms-quick-bar').classList.add('ms-quick-bar-open');
    }

    // removing nav bar list
    const removelist = () =>{
        document.getElementById('ms-quick-bar').classList.remove('ms-quick-bar-open');
    }

    return (
    <aside id="ms-quick-bar" className="ms-quick-bar fixed ms-d-block-lg">

        <ul className="nav nav-tabs ms-quick-bar-list ui-sortable ui-sortable-disabled" role="tablist" onClick={showrightnav}>

        <li className="ms-quick-bar-item ms-has-qa ui-sortable-handle ui-draggable ui-draggable-handle ui-draggable-disabled" role="presentation" data-toggle="tooltip" data-placement="left" title="" data-title="To-do-list" data-original-title="Launch To-do-list" onClick={e=>console.log(e.target)}>
            <a href="#qa-toDo" aria-controls="qa-toDo" role="tab" data-toggle="tab">
            <i className="flaticon-list"></i>

            </a>
        </li>
        <li className="ms-quick-bar-item ms-has-qa ui-sortable-handle ui-draggable ui-draggable-handle ui-draggable-disabled" role="presentation" data-toggle="tooltip" data-placement="left" title="" data-title="Reminders" data-original-title="Launch Reminders">
            <a href="#qa-reminder" aria-controls="qa-reminder" role="tab" data-toggle="tab">
            <i className="flaticon-bell"></i>

            </a>
        </li>
        <li className="ms-quick-bar-item ms-has-qa ui-sortable-handle ui-draggable ui-draggable-handle ui-draggable-disabled" role="presentation" data-toggle="tooltip" data-placement="left" title="" data-title="Notes" data-original-title="Launch Notes">
            <a href="#qa-notes" aria-controls="qa-notes" role="tab" data-toggle="tab">
            <i className="flaticon-pencil"></i>

            </a>
        </li>
        <li className="ms-quick-bar-item ms-has-qa ui-sortable-handle ui-draggable ui-draggable-handle ui-draggable-disabled" role="presentation" data-toggle="tooltip" data-placement="left" title="" data-title="Invite Members" data-original-title="Invite Members">
            <a href="#qa-invite" aria-controls="qa-invite" role="tab" data-toggle="tab">
            <i className="flaticon-share-1"></i>

            </a>
        </li>
        <li className="ms-quick-bar-item ms-has-qa ui-sortable-handle ui-draggable ui-draggable-handle ui-draggable-disabled" role="presentation" data-toggle="tooltip" data-placement="left" title="" data-title="Settings" data-original-title="Settings">
            <a href="#qa-settings" aria-controls="qa-settings" role="tab" data-toggle="tab">
            <i className="flaticon-gear"></i>

            </a>
        </li>
        </ul>
        <div className="ms-configure-qa" data-toggle="tooltip" data-placement="left" title="" data-original-title="Configure Quick Access">

        <a href="#">
            <i className="flaticon-hammer"></i>
        </a>

        </div>

        
        <div className="ms-quick-bar-content">

        <div className="ms-quick-bar-header clearfix">
            <h5 className="ms-quick-bar-title float-left">To-do-list</h5>
            <button type="button" className="close ms-toggler" onClick={removelist} data-target="#ms-quick-bar" data-toggle="hideQuickBar" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>

        <div className="ms-quick-bar-body tab-content">



            <div role="tabpanel" className="tab-pane" id="qa-toDo">
            <div className="ms-quickbar-container ms-todo-list-container ms-scrollable ps">

                <form className="ms-add-task-block">
                <div className="form-group mx-3 mt-0  fs-14 clearfix">
                    <input type="text" className="form-control fs-14 float-left" id="task-block" name="todo-block" placeholder="Add Task Block" value=""/>
                    <button type="submit" className="ms-btn-icon bg-primary float-right"><i className="material-icons text-disabled">add</i></button>
                </div>
                </form>

                <ul className="ms-todo-list">
                <li className="ms-card ms-qa-card ms-deletable">

                    <div className="ms-card-header clearfix">
                    <h6 className="ms-card-title">Task Block Title</h6>
                    <button data-toggle="tooltip" data-placement="left" title="Add a Task to this block" className="ms-add-task-to-block ms-btn-icon float-right"> <i className="material-icons text-disabled">add</i> </button>
                    </div>

                    <div className="ms-card-body">
                    <ul className="ms-list ms-task-block">
                        <li className="ms-list-item ms-to-do-task ms-deletable">
                        <label className="ms-checkbox-wrap ms-todo-complete">
                            <input type="checkbox" value=""/>
                            <i className="ms-checkbox-check"></i>
                        </label>
                        <span> Task to do </span>
                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i></button>
                        </li>
                        <li className="ms-list-item ms-to-do-task ms-deletable">
                        <label className="ms-checkbox-wrap ms-todo-complete">
                            <input type="checkbox" value=""/>
                            <i className="ms-checkbox-check"></i>
                        </label>
                        <span>Task to do</span>
                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i></button>
                        </li>
                    </ul>
                    </div>

                    <div className="ms-card-footer clearfix">
                    <a href="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive </a>
                    <a href="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete </a>
                    </div>

                </li>
                </ul>

            <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0, width: 0}}></div></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 0}}></div></div></div>
            </div>

            <div role="tabpanel" className="tab-pane" id="qa-reminder">
            <div className="ms-quickbar-container ms-reminders">

                <ul className="ms-qa-options">
                <li> <a href="#" data-toggle="modal" data-target="#reminder-modal"> <i className="flaticon-bell"></i> New Reminder </a> </li>
                </ul>

                <div className="ms-quickbar-container ms-scrollable ps">

                <div className="ms-card ms-qa-card ms-deletable">
                    <div className="ms-card-body">
                    <p> Developer Meeting in Block B </p>
                    <span className="text-disabled fs-12"><i className="material-icons fs-14">access_time</i> Today - 3:45 pm</span>
                    </div>
                    <div className="ms-card-footer clearfix">

                    <div className="ms-note-editor float-right">
                        <a href="#" className="text-disabled mr-2" data-toggle="modal" data-target="#reminder-modal"> <i className="flaticon-pencil"> </i> Edit </a>
                        <a href="#" className="text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </a>
                    </div>

                    </div>
                </div>
                <div className="ms-card ms-qa-card ms-deletable">
                    <div className="ms-card-body">
                    <p> Start adding change log to version 2 </p>
                    <span className="text-disabled fs-12"><i className="material-icons fs-14">access_time</i> Tomorrow - 12:00 pm</span>
                    </div>
                    <div className="ms-card-footer clearfix">

                    <div className="ms-note-editor float-right">
                        <a href="#" className="text-disabled mr-2" data-toggle="modal" data-target="#reminder-modal"> <i className="flaticon-pencil"> </i> Edit </a>
                        <a href="#" className="text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </a>
                    </div>

                    </div>
                </div>

                <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0,width: 0}}></div></div><div className="ps__rail-y" style={{top: 0,right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0,height: 0}}></div></div></div>

            </div>
            </div>

            <div role="tabpanel" className="tab-pane" id="qa-notes">

            <ul className="ms-qa-options">
                <li> <a href="#" data-toggle="modal" data-target="#notes-modal"> <i className="flaticon-sticky-note"></i> New Note </a> </li>
                <li> <a href="#"> <i className="flaticon-excel"></i> Export to Excel </a> </li>
            </ul>

            <div className="ms-quickbar-container ms-scrollable ps">

                <div className="ms-card ms-qa-card ms-deletable">
                <div className="ms-card-header">
                    <h6 className="ms-card-title">Don't forget to check with the designer</h6>
                </div>
                <div className="ms-card-body">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis. Etiam at dapibus neque,
                    vel varius metus. Pellentesque eget orci malesuada, venenatis magna et
                    </p>
                    <ul className="ms-note-members clearfix mb-0">
                    <li className="ms-deletable"> <img src="assets/img/people/people-3.jpg" alt="member"/> </li>
                    <li className="ms-deletable"> <img src="assets/img/people/people-5.jpg" alt="member"/> </li>
                    </ul>
                </div>
                <div className="ms-card-footer clearfix">

                    <div className="dropdown float-left">
                    <a href="#" className="text-disabled" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-share-1"></i> Share
                    </a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-menu-header">
                        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Share With</span></h6>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li className="ms-scrollable ms-dropdown-list ms-members-list ps">
                        <a className="media p-2" href="#">
                            <div className="mr-2 align-self-center">
                            <img src="assets/img/people/people-10.jpg" className="ms-img-round" alt="people"/>
                            </div>
                            <div className="media-body">
                            <span>John Doe</span>
                            </div>
                        </a>
                        <a className="media p-2" href="#">
                            <div className="mr-2 align-self-center">
                            <img src="assets/img/people/people-9.jpg" className="ms-img-round" alt="people"/>
                            </div>
                            <div className="media-body">
                            <span>Raymart Sandiago</span>
                            </div>
                        </a>
                        <a className="media p-2" href="#">
                            <div className="mr-2 align-self-center">
                            <img src="assets/img/people/people-7.jpg" className="ms-img-round" alt="people"/>
                            </div>
                            <div className="media-body">
                            <span>Heather Brown</span>
                            </div>
                        </a>
                        <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0,width: 0}}></div></div><div className="ps__rail-y" style={{top: 0,right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0,height: 0}}></div></div></li>
                    </ul>
                    </div>
                    <div className="ms-note-editor float-right">
                    <a href="#" className="text-disabled mr-2" data-toggle="modal" data-target="#notes-modal"> <i className="flaticon-pencil"> </i> Edit </a>
                    <a href="#" className="text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </a>
                    </div>

                </div>
                </div>

                <div className="ms-card ms-qa-card ms-deletable">
                <div className="ms-card-header">
                    <h6 className="ms-card-title">Perform the required unit tests</h6>
                </div>
                <div className="ms-card-body">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis. Etiam at dapibus neque,
                    vel varius metus. Pellentesque eget orci malesuada, venenatis magna et
                    </p>
                    <ul className="ms-note-members clearfix mb-0">
                    <li className="ms-deletable"> <img src="assets/img/people/people-9.jpg" alt="member"/> </li>
                    </ul>
                </div>
                <div className="ms-card-footer clearfix">

                    <div className="dropdown float-left">
                    <a href="#" className="text-disabled" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-share-1"></i> Share
                    </a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-menu-header">
                        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Share With</span></h6>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li className="ms-scrollable ms-dropdown-list ms-members-list ps">
                        <a className="media p-2" href="#">
                            <div className="mr-2 align-self-center">
                            <img src="assets/img/people/people-10.jpg" className="ms-img-round" alt="people"/>
                            </div>
                            <div className="media-body">
                            <span>John Doe</span>
                            </div>
                        </a>
                        <a className="media p-2" href="#">
                            <div className="mr-2 align-self-center">
                            <img src="assets/img/people/people-9.jpg" className="ms-img-round" alt="people"/>
                            </div>
                            <div className="media-body">
                            <span>Raymart Sandiago</span>
                            </div>
                        </a>
                        <a className="media p-2" href="#">
                            <div className="mr-2 align-self-center">
                            <img src="assets/img/people/people-7.jpg" className="ms-img-round" alt="people"/>
                            </div>
                            <div className="media-body">
                            <span>Heather Brown</span>
                            </div>
                        </a>
                        <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{eft: 0,width: 0}}></div></div><div className="ps__rail-y" style={{top: 0,right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0,height: 0}}></div></div></li>
                    </ul>
                    </div>
                    <div className="ms-note-editor float-right">
                    <a href="#" className="text-disabled mr-2" data-toggle="modal" data-target="#notes-modal"> <i className="flaticon-pencil"> </i> Edit </a>
                    <a href="#" className="text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </a>
                    </div>

                </div>
                </div>

            <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0,width: 0}}></div></div><div className="ps__rail-y" style={{top: 0,right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0,height: 0}}></div></div></div>

            </div>

            <div role="tabpanel" className="tab-pane" id="qa-invite">

            <div className="ms-quickbar-container text-center ms-invite-member">
                <i className="flaticon-network"></i>
                <p>Invite Team Members</p>
                <form>
                <div className="ms-form-group">
                    <input type="text" placeholder="Member Email" className="form-control" name="invite-email" value=""/>
                </div>
                <div className="ms-form-group">
                    <button type="submit" name="invite-member" className="btn btn-primary w-100">Invite</button>
                </div>
                </form>
            </div>

            </div>

            <div role="tabpanel" className="tab-pane" id="qa-settings">

            <div className="ms-quickbar-container text-center ms-invite-member">
                <div className="row">
                <div className="col-md-12 text-left mb-5">
                    <h4 className="section-title bold">Customize</h4>
                    <div>
                    <label className="ms-switch">
                        <input type="checkbox" id="dark-mode" onClick={darkmode}/>
                        <span className="ms-switch-slider round"></span>
                    </label>
                    <span> Dark Mode </span>
                    </div>
                    <div>
                    <label className="ms-switch">
                        <input type="checkbox" id="remove-quickbar" onClick={removequickbar}/>
                        <span className="ms-switch-slider round"></span>
                    </label>
                    <span> Remove Quickbar </span>
                    </div>
                </div>
                <div className="col-md-12 text-left">
                    <h4 className="section-title bold">Keyboard Shortcuts</h4>
                    <p className="ms-directions mb-0"><code>Esc</code> Close Quick Bar</p>
                    <p className="ms-directions mb-0"><code>Alt + (1 -&gt; 6)</code> Open Quick Bar Tab</p>
                    <p className="ms-directions mb-0"><code>Alt + Q</code> Enable Quick Bar Configure Mode</p>

                </div>
                </div>
            </div>

            </div>

        </div>

        </div>
  </aside>
    )
}

export default Rightnav
