import React, { useState } from 'react';

const PopUp = (props) => {

    const styles = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"        
    }

    return (
        <div>
            {props.isVisible && (
                <div style={styles}>
                    hello
                    {props.close}
                </div>
            )}
        </div>
    )
}

export default PopUp