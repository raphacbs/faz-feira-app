import React, { useState } from "react";
import { VStack, HStack, Badge, Icon, Text, Box, Avatar } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import { useEffect } from "react";

const CartItem = (props) => {
  const { increment, decrement } = props;
  // const [cartItem, setCartItem] = useState({ ...props.cartItem });

  useEffect(() => {
    // setCartItem(props.cartItem);
  }, [props.cartItem]);

  const update = (value) => {
    const cartItem = {
      id: props.cartItem.id,
      amountOfProduct: value,
      unitValue: props.cartItem.unitValue,
    };
    // setCartItem(item);
    increment(cartItem);
  };

  const onBlur = (value) => {
    update(value);
  };

  return (
    <Box
      flex="1"
      safeAreaRight
      width="95%"
      borderWidth="1"
      borderColor="primary.300"
      shadow="5"
      bg="primary.300"
      p="3"
      rounded="8"
      margin={3}
    >
      <VStack space="2.5" mt="2" px="0.5">
        <HStack space={1} width="100%" justifyContent="space-between">
          <VStack>
            <Avatar
              alignSelf="flex-start"
              size="md"
              source={{
                uri: props.cartItem.product.image,
              }}
            >
              AJ
            </Avatar>
          </VStack>
          <VStack>
            <HStack>
              <Text
                color="coolGray.900"
                mt="3"
                fontWeight="medium"
                fontSize="md"
                width={250}
                height="100%"
                marginTop={-1}
              >
                {props.cartItem.product.description}
              </Text>
            </HStack>
            <Text color="coolGray.500">{props.cartItem.product.brand}</Text>
            <Text color="coolGray.500">{props.cartItem.product.ean}</Text>
          </VStack>
        </HStack>
        <HStack space={4}>
          <VStack>
            <Badge
              rounded="lg"
              _text={{
                fontSize: 20,
              }}
              colorScheme="info"
              alignSelf="center"
              variant="solid"
              startIcon={<Icon as={Ionicons} name="pricetag" color="white" />}
            >
              {props.cartItem.unitValue}
            </Badge>
          </VStack>
        </HStack>
        <HStack justifyContent="space-between">
          <VStack>
            <Badge
              rounded="lg"
              _text={{
                fontSize: 25,
              }}
              alignSelf="center"
              variant="solid"
              colorScheme="warning"
              startIcon={
                <Icon as={Ionicons} name="calculator" size={25} color="white" />
              }
            >
              {props.cartItem.subtotal}
            </Badge>
          </VStack>
          <NumericInput
            value={props.cartItem.amountOfProduct}
            initValue={props.cartItem.amountOfProduct}
            onChange={(value) => {
              update(value);
            }}
            rounded
            rightButtonBackgroundColor="white"
            leftButtonBackgroundColor="white"
            borderColor="black"
            inputStyle={{ backgroundColor: "white", borderColor: "black" }}
            editable={false}
            onBlur={onBlur}
            selectTextOnFocus={true}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default CartItem;
