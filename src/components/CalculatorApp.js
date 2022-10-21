import React, { useState } from "react";
import { Flex, Box, Input, Grid, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { del, clr, setNum,shwAns } from "../redux/Slices/calculatorSlice";
import { useDispatch } from "react-redux";

export const CalculatorApp = () => {
  const dispatch = useDispatch();
  const ans = useSelector((state) => state.calculator.ans);
  const num = useSelector((state) => state.calculator.num);
  const [number, setNumber] = useState("");
  const handleAns = (e) =>{
    e.preventDefault(
      dispatch(shwAns())
    )
  }

  return (
    <Box>
      <Flex
        w="50%"
        backgroundColor="#3B4664"
        marginX="auto"
        borderRadius="30"
        direction="column"
        padding="50px"
      >
        <Input
          placeholder="0"
          _placeholder={{ color: "inherit" }}
          fontSize="50px"
          fontWeight="bold"
          textColor="#FFFFFF"
          textAlign="right"
          borderRadius="20"
          padding="10"
          backgroundColor="#191F32"
          variant="unstyled"
          value={ans.length=== 0 ? num:ans}
        ></Input>
        <Flex
          backgroundColor="#191F32"
          marginTop={["5px", "50px"]}
          padding={["5", "15"]}
          borderRadius="20"
          direction="column"
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={[3, 4, 5, 8]}
            padding={[5, 10, 20, 30]}
            marginX="auto"
          >
            <Button
              onClick={() => {
                setNumber(number + "7");
                dispatch(setNum([num + 7]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              7
            </Button>
            <Button
              onClick={() => {
                dispatch(setNum([num + 8]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              8
            </Button>
            <Button
              onClick={() => {
                dispatch(setNum([num + 9]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              9
            </Button>

            <Button
              onClick={() => dispatch(del())}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={50}
              textColor="#252d44"
            >
              DEL
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "4");
                dispatch(setNum([num + 4]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              4
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "5");
                dispatch(setNum([num + 5]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              5
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "6");
                dispatch(setNum([num + 6]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              6
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "*");
                dispatch(setNum([num + "*"]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              x
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "1");
                dispatch(setNum([num + 1]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              1
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "2");
                dispatch(setNum([num + 2]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              2
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "3");
                dispatch(setNum([num + 3]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              3
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "-");
                dispatch(setNum([num + "-"]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              -
            </Button>
            <Button
              onClick={() => {
                setNumber(number + ".");
                dispatch(setNum([num + "."]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              .
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "0");
                dispatch(setNum([num + 0]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              0
            </Button>
            <Button
              onClick={() => {
                setNumber(number + "/");
                dispatch(setNum([num + "/"]));
              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={70}
              textColor="#252d44"
            >
              /
            </Button>
            <Button
              onClick={() => {
                // setNumber(number + "+");
                // dispatch(setNum({ ...num }, [{ number }, `+`]));
                // setNumber("");
                // console.log(num);
                setNumber(number + "+");
                dispatch(setNum([num + "+"]));

              }}
              padding="10"
              bg="#E9E3D3"
              borderRadius="10"
              fontSize={50}
              textColor="#252d44"
            >
              +
            </Button>
          </Grid>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={5}
            paddingBottom="4"
            marginX="auto"
          >
            <Button
              onClick={() => {
                dispatch(clr());
              }}
              padding="10"
              bg="#D2653D"
              borderRadius="10"
              fontSize={50}
              textColor="#FFFFFF"
            >
              RESET
            </Button>
            <Button
              onClick={
               handleAns
              }
              padding="10"
              bg="#056D90"
              borderRadius="10"
              fontSize={50}
              textColor="#FFFFFF"
            >
              =
            </Button>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};
