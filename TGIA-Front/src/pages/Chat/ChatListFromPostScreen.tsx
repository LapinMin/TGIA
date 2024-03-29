import * as React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  FlatList,
  Pressable
} from "react-native";
import ChatTitle from "./ChatTitle";
import Axios from "axios";
import useStore from "../../../store";
import IonIcon from "react-native-vector-icons/Ionicons";

type RootStackParamList = {
  ChatListFromPost: undefined;
};

type ChatListFromPostScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ChatListFromPost"
>;

const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

function ChatListFromPostScreen({
  route,
  navigation
}: ChatListFromPostScreenProps) {
  const post = route.params?.post;
  const [chats, setChats] = useState([]);
  const { session, url } = useStore();
  /** 채팅 목록 렌더링하는 함수 */
  const renderItem = ({ item }) => {
    return <ChatTitle chat={item} navigation={navigation} />;
  };
  /** 게시글 상세 화면으로 돌아가는 함수 */
  const backToPost = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  /** 서버로부터 문의 채팅방 목록 받아와 렌더링하는 함수 */
  useEffect(() => {
    Axios.get(`${url}/chat/get_chat_room_list`, {
      params: {
        id: post.post_id,
        member_id: session.member_id
      }
    })
      .then((res) => {
        console.log("chatlistfrompost");
        console.log(res.data);
        setChats(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView style={{ height: vh, backgroundColor: "white" }}>
      <View
        style={{
          height: vh / 15,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1.25,
          borderColor: "#b6bcd3"
        }}
      >
        <Pressable
          style={{ position: "absolute", left: vw / 40 }}
          onPress={backToPost}
        >
          <IonIcon name={"chevron-back-sharp"} size={25} />
        </Pressable>
        <Text style={{ marginLeft: "auto", marginRight: "auto", fontSize: 20 }}>
         {post.title.length > 11 ? post.title.slice(0, 11) + "..." : post.title}
        </Text>
      </View>
      <FlatList
        data={chats.sort((a, b) => b.last_chatMessage - a.last_chatMessage)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default ChatListFromPostScreen;
