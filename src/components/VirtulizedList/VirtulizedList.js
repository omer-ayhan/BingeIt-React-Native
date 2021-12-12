import React from "react";
import { FlatList } from "react-native";
import uuid from "react-native-uuid";

const VirtualizedList = ({ children }) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={(_, i) => uuid.v4().toString()}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

export default VirtualizedList;
