import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import uuid from "react-native-uuid";

import useFetchEffect from "../../hooks/useFetchEffect";
import colors from "../../style/colors";
import Button from "../Button";
import Comments from "../Comments";
import StatusIndicator from "../StatusIndicator";
import styles from "./CommentWrapper.styles";
import stylesDef from "../../style/defaultStyles.styles";

function CommentWrapper({ commentID }) {
  const [commentsData, setCommentsData] = useState([]);
  const [comment, setComment] = useState("");

  const urlComments = `http://192.168.1.124:3000/comments?movieId=${commentID}`;

  const { data: incomingComment, loading, error } = useFetchEffect(urlComments);

  useEffect(() => {
    setCommentsData(incomingComment);
  }, [incomingComment]);

  if (error) {
    return (
      <StatusIndicator
        text="An error has occurred"
        icon="alert-circle"
        iconColor={colors.danger}
        iconSize={60}
      />
    );
  }

  if (loading) {
    return (
      <StatusIndicator
        text="Loading..."
        icon="clock-time-eight"
        iconColor={colors.main}
        iconSize={60}
      />
    );
  }

  const renderComments = ({ item, index }) => (
    <Comments item={item} index={index} />
  );

  const renderEmpty = () => (
    <StatusIndicator
      containerStyle={stylesDef.noFlex}
      textStyle={styles.emptyTitle}
      text="Be first to comment"
      icon="comment"
      iconColor={colors.main}
      iconSize={60}
    />
  );

  const extractCommentId = (_, index) => `${index + 1}?__|_?${index}`;

  const handleSendComment = async () => {
    if (!comment) return;
    const payload = {
      id: uuid.v4(),
      movieId: commentID,
      comment: comment,
    };
    setCommentsData([...new Set([...commentsData, payload])]);
    setComment("");
  };

  return (
    <View style={[styles.reviewContainer]}>
      <Text style={styles.reviewTitle}>REVIEWS</Text>
      <Text style={styles.reviewDesc}>{commentsData.length} Reviews</Text>
      <View>
        <FlatList
          listKey="review"
          data={commentsData}
          renderItem={renderComments}
          ListEmptyComponent={renderEmpty}
          keyExtractor={extractCommentId}
        />
      </View>
      <View style={styles.addReviewContainer}>
        <TextInput
          value={comment}
          style={styles.input}
          onChangeText={setComment}
          placeholder="Send Comment"
          multiline
        />
        <Button onPress={handleSendComment} title="Send Comment" />
      </View>
    </View>
  );
}
export default memo(CommentWrapper);
