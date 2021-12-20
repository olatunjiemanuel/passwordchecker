import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useState from "react-hook-use-state";

// expo imports
import { AntDesign } from "@expo/vector-icons";

Passwordchecker = (props) => {
  const { formname, text1, fontColor, text2, text3, text4 } = props;

  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [BorderHighlight, setBorderHighlight] = useState(false);
  const [checkcircle1, setcheckcircle1] = useState("gray");
  const [checkcircle2, setcheckcircle2] = useState("gray");
  const [checkcircle3, setcheckcircle3] = useState("gray");
  const [checkcircle4, setcheckcircle4] = useState("gray");
  const [infouser, setinfouser] = useState({ info: "" });

  const { info } = infouser;

  // does this operation when the onPress function is triggered
  const onPressHandler = () => {
    setIsSecureEntry((prev) => !prev);
  };

  // runs through this code block when text in the input field is changed
  const onChangeHandler = (info) => {
    noofcharchecker(info);
    Upperandlowercasecheck(info);
    numchecker(info);
    hasspecialchar(info);
  };

  // this block of code checks for no of characters in user input
  const noofcharchecker = (info) => {
    setinfouser(info);
    info.length >= 8 ? setcheckcircle1("blue") : setcheckcircle1("gray");
  };

  // this block of code checks for upper and lowerCase characters in user input
  const Upperandlowercasecheck = (info) => {
    setinfouser(info);
    info.toUpperCase() != info && info.toLowerCase() != info
      ? setcheckcircle2("blue")
      : setcheckcircle2("gray");
  };

  // this block of code checks for numbers in user input using regEx expressions
  const numchecker = (info) => {
    setinfouser(info);
    /\d/.test(info) ? setcheckcircle3("blue") : setcheckcircle3("gray");
  };

  // this block of code checks for special characters in user input using regEx expressions
  const hasspecialchar = (info) => {
    setinfouser(info);
    info.match(/\W/) ? setcheckcircle4("blue") : setcheckcircle4("gray");
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View>
        <View
          style={[
            styles.formcontainer,
            BorderHighlight ? styles.highlight : null,
          ]}
        >
          <Text style={styles.text}>{formname}</Text>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.textinput}
              secureTextEntry={isSecureEntry}
              onFocus={() => {
                setBorderHighlight(true);
              }}
              onBlur={() => {
                setBorderHighlight(false);
              }}
              placeholder="Create a password"
              onChangeText={onChangeHandler}
              value={info}
            />
            <TouchableOpacity onPress={onPressHandler}>
              <Text style={styles.showhide}>
                {isSecureEntry ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column", marginTop: 31 }}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="checkcircle" size={12} color={checkcircle1} />
          <Text style={[styles.verifytext, { color: fontColor }]}>{text1}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 9 }}>
          <AntDesign name="checkcircle" size={12} color={checkcircle2} />
          <Text style={[styles.verifytext, { color: fontColor }]}>{text2}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 9 }}>
          <AntDesign name="checkcircle" size={12} color={checkcircle3} />
          <Text style={[styles.verifytext, { color: fontColor }]}>{text3}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 9 }}>
          <AntDesign name="checkcircle" size={12} color={checkcircle4} />
          <Text style={[styles.verifytext, { color: fontColor }]}>{text4}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formcontainer: {
    borderWidth: 1,
    width: 335,
    height: 60,
    borderRadius: 6,
    borderColor: "gray",
  },
  textinput: {
    width: 250,
    marginLeft: 16,
  },
  text: {
    marginLeft: 16,
    marginTop: 11,
    marginBottom: 10,
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showhide: {
    marginRight: 15,
  },
  verifytext: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 8,
  },
  highlight: {
    borderColor: "blue",
  },
});

export default Passwordchecker;
