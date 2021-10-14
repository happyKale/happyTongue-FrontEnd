import React from 'react';
import { Grid, Button, Image, Text, Input } from '../elements';
import { io } from 'socket.io-client';
import moment from 'moment';

const Chat = (props) => {

  const [state, setState] = React.useState({
    message: "",
    nickname: "dogmania",
  });
  const [chatLog, setChatLog] = React.useState([]);
  const [chat, setChat] = React.useState([]);
  const [userList, setUserList] = React.useState([]);

  const socket = io('http://3.34.138.243');
  socket.on("chatLog", (chatLog) => {
    setChatLog([...chatLog, { chatLog }]);
  })

  React.useEffect(() => {

    socket.on("receiveMsg", (data) => {
      const { nickname, msg, time } = data;
      setChat([...chat, { nickname, msg, time }]);
    })

    socket.on("currentOn", (data) => {
      setUserList([...userList, data]);
    })
    return () => socket.disconnect();
  }, [chat], [userList]);

  const sendMessage = () => {
    console.log(state)
    const { message, nickname } = state;
    socket.emit("sendMsg", { nickname, msg: message, })
    setState({ ...state, message: "", });
  }

  return (
    <React.Fragment>
      <Grid width="450px" height="80vh" margin="0 auto" padding="1em 2em"
        bg="#f0b7a4" flex="flex-start" flex_direction="column">
        <Grid flex="space-between" height="10%">

          <Grid flex="flex-start" >
            <Button text="채팅" width="20%" border="none" margin="0 10px 0 0 "
              padding="1em" border_radius="7px"></Button>
            <Button text="접속자" width="30%" border="none"
              padding="1em" border_radius="7px"></Button>
          </Grid>
          <Grid width="auto">
            <Text family="GowunDodum-Regular" bold>{userList.length} 명이 접속 중입니다</Text>
          </Grid>

        </Grid>
        <Grid bg="#f1d1b5" height="60%" margin="0 0 30px 0" padding="1em"
          border_radius="7px" overflow="auto" >

          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>
          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>
          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>
          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>
          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>
          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>
          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Grid bg="white" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold>메세지: {chatLog.msg}</Text>
              </Grid>
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
            </Grid>
          </Grid>

          <Grid height="auto" margin="0 0 5px 0">
            <Grid flex="flex-end" height="auto" margin="0 0 5px 0">
              <Image shape="circle" size="30" />
              <Text margin="5px" family="GowunDodum-Regular" bold>이름 : {chatLog.nickname}</Text>
            </Grid>
            <Grid flex="space-between">
              <Text margin="0" padding="15px 0 0 0"
                family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
              <Grid bg="skyblue" border_radius="20px" height="auto" width="85%" padding="0 5px">
                <Text margin="5px" family="GowunDodum-Regular" bold
                  align="right" color="black" >메세지: {chatLog.msg}</Text>
              </Grid>
            </Grid>
          </Grid>

          {chatLog.map((chatting, index) => {
            if (chatting.nickname === state.nickname) {
              return (
                <Grid height="auto" margin="0 0 5px 0">
                  <Grid flex="flex-end" height="auto" margin="0 0 5px 0">
                    <Image shape="circle" size="30" />
                    <Text margin="5px" family="GowunDodum-Regular" bold>
                      이름 : {chatLog.nickname}
                    </Text>
                  </Grid>
                  <Grid flex="space-between">
                    <Text margin="0" padding="15px 0 0 0"
                      family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
                    <Grid bg="skyblue" border_radius="20px" height="auto" width="85%" padding="0 5px">
                      <Text margin="5px" family="GowunDodum-Regular" bold
                        align="right" color="black" >메세지: {chatLog.msg}</Text>
                    </Grid>
                  </Grid>
                </Grid>
              )
            };
            return (
              <Grid height="auto" margin="0 0 5px 0" key={index}>
                <Grid flex height="auto" margin="0 0 5px 0">
                  <Image shape="circle" size="30" />
                  <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.nickname}</Text>
                </Grid>
                <Grid flex="space-between">
                  <Grid bg="white" border_radius="20px" height="auto" width="85%">
                    <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.msg}</Text>
                  </Grid>
                  <Text margin="0" padding="15px 0 0 0"
                    family="GowunDodum-Regular" size=".8em">{chatting.time}</Text>
                </Grid>
              </Grid>
            )
          })}

          {chat.map((chatting, index) => {
            if (chatting.nickname === state.nickname) {
              return (
                <Grid height="auto" margin="0 0 5px 0">
                  <Grid flex="flex-end" height="auto" margin="0 0 5px 0">
                    <Image shape="circle" size="30" />
                    <Text margin="5px" family="GowunDodum-Regular" bold>
                      이름 : {chatLog.nickname}
                    </Text>
                  </Grid>
                  <Grid flex="space-between">
                    <Text margin="0" padding="15px 0 0 0"
                      family="GowunDodum-Regular" size=".8em">시간: {chatLog.time}</Text>
                    <Grid bg="skyblue" border_radius="20px" height="auto" width="85%" padding="0 5px">
                      <Text margin="5px" family="GowunDodum-Regular" bold
                        align="right" color="black" >메세지: {chatLog.msg}</Text>
                    </Grid>
                  </Grid>
                </Grid>
              )
            };
            return (
              <Grid height="auto" margin="0 0 5px 0" key={index}>
                <Grid flex height="auto" margin="0 0 5px 0">
                  <Image shape="circle" size="30" />
                  <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.nickname}</Text>
                </Grid>
                <Grid flex="space-between">
                  <Grid bg="white" border_radius="20px" height="auto" width="85%">
                    <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.msg}</Text>
                  </Grid>
                  <Text margin="0" padding="15px 0 0 0"
                    family="GowunDodum-Regular" size=".8em">{chatting.time}</Text>
                </Grid>
              </Grid>
            )
          })}

        </Grid>
        <Grid bg="#f1d1b5" height="30%" padding="1em" border_radius="7px">

          <Grid flex flex_direction="column" height="auto" >
            <Grid flex margin="0 0 20px 0">
              <Image shape="circle" size="30" margin="0 0 5px 0" />
              <Text margin="0" family="GowunDodum-Regular" bold>이름 : </Text>
            </Grid>
            <Grid flex="flex-start">
              <Input mulitline width="550px" height="120px" family="GowunDodum-Regular" bold
                _onChange={(e) => {
                  setState({ ...state, message: e.target.value });
                }} onSubmit={sendMessage} border="none" value={state.message} />
              <Button text="전송" padding="50px 0" border="1px solid black"
                _onClick={sendMessage}></Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default Chat;