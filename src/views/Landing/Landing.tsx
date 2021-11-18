import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { data } from "./data.js";

interface Props { }

const Landing: React.FC<Props> = () => {
    return (
        <Box>
            <Header>
                <div className="left">
                    <img src={require(`../../assets/img/logo.png`).default} alt="" />
                </div>
                <div className="right">
                  <div className="gettoken">
                    <img src={require(`../../assets/img/trend.png`).default} alt="" />
                    <div className="info">
                      <h5>PLS TOKEN PRICE</h5>
                      <h3>$ 3.21 <span>+5.42%</span></h3>
                    </div>
                  </div>
                  <div className="gettoken">
                    <img src={require(`../../assets/img/trend.png`).default} alt="" />
                    <div className="info">
                      <h5>PLS DIVIDEND PAID STAKERS</h5>
                      <h3>2,321.2 PLS<span>+5.42%</span></h3>
                    </div>
                  </div>
                    <button>LAUNCH DAPP</button>
                </div>
            </Header>
            <Whitepaper>
                <h1><span className="gradient">Read our</span> White Paper</h1>
                <div className="btnlink">
                    <a href="http://onlinetechfiles.link/fusegold-whitepaper">READ HERE</a>
                </div>
                <img  src={require(`../../assets/img/whitepaper.png`).default} className="paper" alt="" />
            </Whitepaper>
            <Features>
                <h1> <span className="gradient">Key</span> Features</h1>
                <div className="cardOutermain">
                  <div className="cardOuter">
                      {data.map((item, key) => (
                          <Card iterator={key} dataitem={item} />
                      ))}
                  </div>
                </div>
            </Features>
            <Footer>
                <div className="left">
                Web UI: <span>v1.1</span> <br/>
Contract: <span>v1.7</span>
                </div>
                <div className="right">
                support@pulsepool.io
                </div>
            </Footer>
        </Box>
    );
};

const Box = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 6%;
  background-color: #0e0f0f;
  position:relative;
  box-shadow: 0 50px 200px 150px rgba(0,0,0,0.8);
  &::before{
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: 0;
    right: 0%;
    background: linear-gradient(to right, #01e1ff, #6519ff ,#d214e5,#fb021a);
    z-index: 1;
  }
  .left {
    img {
      height: 40px;
      width: auto;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
   .gettoken{
    display: flex;
    align-items: center;
    margin:0 30px;
    img{
      height:20px;
      margin-right:14px;
      display:block;
    }
    .info{
      h5{
        font-size:14px;
        margin-bottom:8px;
        margin-top:0;
      }
      h3{
        font-size:18px;
        display: flex;
    align-items: center;
    margin-top:0;
    margin-bottom:0px;
        span{
          border-radius: 5px;
background-color: #1d7c1d;
color: #00ff15;
font-size:12px;
padding:6px;
margin-left:10px;
        }
      }
    }
   }
  }
  @media screen and (max-width:960px){
    flex-direction:column;
    .right {
        padding:0 14px;
    }
    .left {
        margin-left: 6%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:30px;
        width:100%;
      }
    }
    @media screen and (max-width:840px){
      .right {
        flex-direction:column;
        justify-content: center;
        align-items: center;
        .gettoken{
          margin:20px 15px;
        }
        button{
          margin:20px 15px;
        }
      }
    }
    @media screen and (max-width:500px){
        .left{
            img {
                height: 40px;
              }
        }
    }
    
`;

const Whitepaper = styled.div`
    position:relative;
  padding: 80px 45px 34px 0;
  margin:0 6%;
  min-height:8vh;
  h1 {
    margin-top: 0;
    margin-bottom: 25px;
    font-size:40px;
  }
  a {
    background: linear-gradient(80deg, #01e1ff, #6519ff ,#d214e5,#fb021a);
    padding: 12px 35px;
    color: #fff;
    display: block;
    width: fit-content;
    margin-left: 0px;
  }
  .btnlink {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .paper{
    width:56%;
    display:block;
    margin-left:auto;
  }
`;

const Features = styled.div`
  margin-top: 50px;
  
  h1{
    background:#000;
    padding: 150px 6% 240px;
    margin-bottom:-180px;
  }
  .cardOutermain{
    margin: 0 6%;
  }
  .cardOuter {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    margin:0 -15px;
  }
  @media screen and (max-width:1300px){
    .cardd {
        width: calc(50% - 30px) !important;
      }
    }
    @media screen and (max-width:768px){
        .cardd {
            width: 100% !important;
          }
        }
    }
`;

const Footer = styled.div`
background-color: #0e0f0f;
border-top:4px solid #353532;
padding: 20px 30px;
color: #747474;
margin-top:80px;
box-shadow: 0 0px 200px 150px rgba(0,0,0,0.8);
  display: flex;
  justify-content:space-between;
  align-items:Center;
  span{
    font-family: 'Arimo', sans-serif;
    font-weight:700
  }
`;

export default Landing;
