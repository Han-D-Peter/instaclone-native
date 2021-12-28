import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import Photo from "../components/Photo";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        userName
        avatar
      }
      caption
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
`;

export default function Feed({ navigation }) {
  const { data, loading, refetch } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const [refreshing, setRefreshing] = useState(false);
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={photo => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
