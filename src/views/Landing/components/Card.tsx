import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
    iterator: any,
    dataitem: any,
}

const Card: React.FC<Props> = ({ iterator, dataitem }) => {
    const { heading, content } = dataitem;
    return (
        <Box className="cardd">
            <h4>{heading}</h4>
            <p>{content}</p>
        </Box>
    );
};

const Box = styled.div`
border-radius: 30px;
background-color: #151414;
padding:40px 30px;
position:relative;
min-height:300px;
width: calc(33.33% - 30px);
      box-sizing: border-box;
      margin:15px;
h4{
    margin:0;
    margin-bottom:10px;
    font-size:25px;
    font-weight:700;
    min-height:80px;
}
p{
    font-size:18px;
    word-wrap: normal;
}

@media screen and (max-width:500px){
    padding:28px 70px 30px 40px;
    img{
        position:absolute;
        width:40px;
        height:auto;
        bottom:30px;
        right:30px;
    }
}
`;

export default Card;
