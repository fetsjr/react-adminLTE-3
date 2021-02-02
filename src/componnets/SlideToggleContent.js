// @flow
import React, { useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };
type Props = {

};
function getElementHeight(ref) {
    return ref.current ? ref.current.getBoundingClientRect().height : 0;
}

export const SlideToggleContent = ({ isVisible, children, forceSlideIn }) => {
    const isVisibleOnMount = useRef(isVisible && !forceSlideIn);
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const transitions = useTransition(isVisible, null, {
        enter: () => async (next, cancel) => {
            const height = getElementHeight(innerRef);

            cancel();

            await next({ height, opacity: 1, overflow: "hidden" });
            await next(visibleStyle);
        },
        leave: () => async (next, cancel) => {
            const height = getElementHeight(containerRef);

            cancel();

            await next({ height, overflow: "hidden" });
            await next(hiddenStyle);

            isVisibleOnMount.current = false;
        },
        from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
        unique: true
    });


    return transitions.map(({ item: show, props: springProps, key }) => {
        if (show) {
            return (
                <animated.div ref={containerRef} key={key} style={springProps}>
                    {children}
                </animated.div>
            );
        }

        return null;
    });
};
