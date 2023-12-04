import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import ButtonCustom from "../UI/ButtonCustom";

const PhoneForm = ({ onCancel, onSubmit, buttonLabel, defaultValues }) => {
  const [inputs, setInputs] = useState({
    name: { value: defaultValues ? defaultValues.name : "", isValid: true },
    priceNew: {
      value: defaultValues ? defaultValues.priceNew.toString() : "",
      isValid: true,
    },
    priceOld: {
      value: defaultValues ? defaultValues.priceOld.toString() : "",
      isValid: true,
    },
    quantity: {
      value: defaultValues ? defaultValues.quantity.toString() : "",
      isValid: true,
    },
    typeProduct: {
      value: defaultValues ? defaultValues.typeProduct : "",
      isValid: true,
    },
    productInfo: {
      value: defaultValues ? defaultValues.productInfo : "",
      isValid: true,
    },
  });
  function inputChangeValue(inputIndentifier, enteredValue) {
    setInputs((currentInput) => {
      return {
        ...currentInput,
        [inputIndentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  function submitHandler() {
    const phonesData = {
      name: inputs.name.value,
      priceNew: +inputs.priceNew.value,
      priceOld: +inputs.priceOld.value,
      quantity: +inputs.quantity.value,
      typeProduct: inputs.typeProduct.value,
      productInfo: inputs.productInfo.value,
    };
    const isValiName = phonesData.name.length > 0;
    const isValiPriceNew =
      !isNaN(phonesData.priceNew) && phonesData.priceNew > 0;
    const isValiPriceOld =
      !isNaN(phonesData.priceOld) && phonesData.priceOld > 0;
    const isValiQuantity =
      !isNaN(phonesData.quantity) && phonesData.quantity > 0;
    const isValiTypeProduct = phonesData.typeProduct.length > 0;
    const isValiProductInfo = phonesData.productInfo.length > 0;

    if (
      !isValiName ||
      !isValiPriceNew ||
      !isValiPriceOld ||
      !isValiQuantity ||
      !isValiTypeProduct ||
      !isValiProductInfo
    ) {
      Alert.alert("Invalid Input", "Please check your input Value");
      setInputs((currentInput) => {
        return {
          name: { value: currentInput.name.value, isValid: isValiName },
          priceNew: {
            value: currentInput.priceNew.value,
            isValid: isValiPriceNew,
          },
          priceOld: {
            value: currentInput.priceOld.value,
            isValid: isValiPriceOld,
          },
          quantity: {
            value: currentInput.quantity.value,
            isValid: isValiQuantity,
          },
          typeProduct: {
            value: currentInput.typeProduct.value,
            isValid: isValiTypeProduct,
          },
          productInfo: {
            value: currentInput.productInfo.value,
            isValid: isValiProductInfo,
          },
        };
      });
      return;
    }
    onSubmit(phonesData);
  }
  const formIsInvalid =
    !inputs.name.isValid ||
    !inputs.priceNew.isValid ||
    !inputs.priceOld.isValid ||
    !inputs.quantity.isValid ||
    !inputs.typeProduct.isValid ||
    !inputs.productInfo.isValid;
  return (
    <ScrollView
      style={styles.containerInput}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Your Phone</Text>
      <Input
        style={styles.rowInput}
        invalid={!inputs.name.isValid}
        label={"Name"}
        textInputConfig={{
          onChangeText: inputChangeValue.bind(this, "name"),
          value: inputs.name.value,
        }}
      />
      <Input
        style={styles.rowInput}
        invalid={!inputs.priceNew.isValid}
        label={"Price New"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputChangeValue.bind(this, "priceNew"),
          value: inputs.priceNew.value,
        }}
      />
      <Input
        style={styles.rowInput}
        invalid={!inputs.priceOld.isValid}
        label={"Price Old"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputChangeValue.bind(this, "priceOld"),
          value: inputs.priceOld.value,
        }}
      />
      <Input
        style={styles.rowInput}
        invalid={!inputs.quantity.isValid}
        label={"Quantity"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputChangeValue.bind(this, "quantity"),
          value: inputs.quantity.value,
        }}
      />
      <Input
        style={styles.rowInput}
        invalid={!inputs.typeProduct.isValid}
        label={"Type Product"}
        textInputConfig={{
          onChangeText: inputChangeValue.bind(this, "typeProduct"),
          value: inputs.typeProduct.value,
        }}
      />
      <Input
        label={"Product Info"}
        invalid={!inputs.productInfo.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeValue.bind(this, "productInfo"),
          value: inputs.productInfo.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input value - please check entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <ButtonCustom style={styles.button} mode={"flat"} onPress={onCancel}>
          Cancel
        </ButtonCustom>
        <ButtonCustom style={styles.button} onPress={submitHandler}>
          {buttonLabel}
        </ButtonCustom>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    margin: 8,
  },
});

export default PhoneForm;
