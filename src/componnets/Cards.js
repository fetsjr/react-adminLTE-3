import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {useSpring, animated, config} from "react-spring";
import {useMeasure} from "../helpers/useMesure";

export const Cards = ({children,sync,maximize,collapse,remove } ) => {
    const [CollapseState, setCollapseState] = useState(false)
    const style ={
        display: 'block'
    }
    const [bind,{height}] = useMeasure();
    const displayStyle = useSpring({
        height: CollapseState ? height : 0,
    });

    const syncToggle = () => {

    }
    const maximizeToggle = () => {

    }
    const collapseToggle = () => {
        setCollapseState(!CollapseState)
    }
    const removeToggle = () => {

    }

    return (
        <>
            <div className={`card card-primary ${CollapseState?'collapsed-card':''}`}>
                <div className="card-header">
                    <h3 className="card-title">Expandable</h3>

                    <div className="card-tools">
                        { sync? <button type="button" className="btn btn-tool" onClick={syncToggle} >
                                <FontAwesomeIcon icon="plus" />
                                </button>:''
                        }
                        { maximize? <button type="button" className="btn btn-tool" onClick={maximizeToggle} >
                                <FontAwesomeIcon icon="plus" />
                                </button>:''
                        }
                        { collapse? <button type="button" className="btn btn-tool" onClick={collapseToggle} >
                                <FontAwesomeIcon icon="plus" />
                                </button>:''
                        }
                        { remove? <button type="button" className="btn btn-tool" onClick={removeToggle} >
                                <FontAwesomeIcon icon="plus" />
                                </button>:''
                        }
                    </div>

                </div>

                <div className="card-body" {...bind} >
                    <animated.div className="content" style={{ ...displayStyle, overflow: "hidden" }} >
                        {children}
                    </animated.div>
                </div>

            </div>
        </>
    );
};
Cards.propTypes = {
    sync:PropTypes.bool,
    maximize:PropTypes.bool,
    collapse:PropTypes.bool,
    remove:PropTypes.bool,
}

export default Cards;
