import React from "react";
import { FlatList } from "react-native";
import uuid from "react-native-uuid";

/**
 * This component lets us wrap all flatlist inside a virtualized list which in turn gives us the ability to scroll
 * **/

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
