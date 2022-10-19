import React from 'react'

const Heading = () => {
  return (
        <h1 style={{position: "relative",
            left: "50%",
            top: "0",
            width: "300px",
            transform: "translateX(-50%)",
            backgroundImage: 'linear-gradient(to top, rgba(255,0,0,0), rgba(0, 0, 0, 0.1))',
            color: "#fff",
            fontWeight: "100",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            fontSize: "18px",
            textAlign: "center",
            padding: "10px"}}>TODO LIST</h1>
  )
}

export default Heading
