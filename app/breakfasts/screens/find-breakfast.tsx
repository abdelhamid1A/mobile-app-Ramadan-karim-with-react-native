import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Map } from "../../shared/components/Map";
import {style} from '../../style/style';

import { FtourController } from "../controllers/ftourController";

export default function findAssistance({ history }: any) {
  const [allBreakFast, setAllBreakFast] = useState(null);

  useEffect(() => {
    async function getAllAssistances() {
      let ftourController = new FtourController();

      let data :any = await ftourController.getBreakFast;

      setAllBreakFast(data);
    }
    getAllAssistances();
  }, []);

  const pressHandler = (id: any) => {
    console.log(id);
    console.log("cliked");
  };

  return (
    <View
      style={style.imageBackground}
      // source=
    >
      {/* <Map data={allBreakFast && allBreakFast} /> */}
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
  },
});
