import styled from "styled-components";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  align-items: center;
`;
const Img = styled.img`
  height: 80%;
  width: 90%;
`;
const InfContainer = styled.div`
  margin: 0;
  padding: 0;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Info = styled.p`
  margin: 30px 0px;
  letter-spacing: 4px;
  line-height: 40px;
`;
const Button = styled.button`
  background-color: transparent;
  border-radius: 5%;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.5s ease;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfContainer>
              <Title>{item.title}</Title>
              <Info>{item.desc}</Info>
              <Button>Buy Now</Button>
            </InfContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
