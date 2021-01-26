// @flow
import React,{ useState, } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faStar, faClock} from '@fortawesome/free-solid-svg-icons'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

type Props = {
    notifications: [],
    tag: '',
};

export const MessagesDropdown = (props: Props) => {
    const [state, setState] = useState({   dropdownOpen: false});
    const toggleDropdown = () =>{
        setState({ dropdownOpen: !state.dropdownOpen });
    };
    return (
        <>
            <Dropdown isOpen={state.dropdownOpen} toggle={toggleDropdown} className="nav-item dropdown" tag={props.tag} id="messagesDropdown">
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="a"
                    className="nav-link" onClick={toggleDropdown} aria-expanded={state.dropdownOpen}>
                    <FontAwesomeIcon icon={faComments}/>
                    <span className="badge badge-danger navbar-badge">3</span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu dropdown-menu-lg dropdown-menu-right" onClick={toggleDropdown}>
                    <a href="#" className="dropdown-item">

                        <div className="media">
                            <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar"
                                 className="img-size-50 mr-3 img-circle"/>
                            <div className="media-body">
                                <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger">
                                                   <FontAwesomeIcon icon={faStar}/>
                                                </span>
                                </h3>
                                <p className="text-sm">Call me whenever you can...</p>
                                <p className="text-sm text-muted">
                                    <FontAwesomeIcon icon={faClock}/> 4
                                    Hours Ago</p>
                            </div>
                        </div>

                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">

                        <div className="media">
                            <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar"
                                 className="img-size-50 img-circle mr-3"/>
                            <div className="media-body">
                                <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </span>
                                </h3>
                                <p className="text-sm">I got your message bro</p>
                                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                    Hours Ago</p>
                            </div>
                        </div>

                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">

                        <div className="media">
                            <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar"
                                 className="img-size-50 img-circle mr-3"/>
                            <div className="media-body">
                                <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </span>
                                </h3>
                                <p className="text-sm">The subject goes here</p>
                                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                    Hours Ago</p>
                            </div>
                        </div>

                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </DropdownMenu>

           </Dropdown>

        </>
    );
};
