import React from "react";
import { FlatList } from "react-native";
import uuid from "react-native-uuid";

const VirtualizedList = ({ children }) => {
  const extractId = (_, i) => uuid.v4().toString();

  return (
    <FlatList
      data={[]}
      keyExtractor={extractId}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

export default VirtualizedList;
