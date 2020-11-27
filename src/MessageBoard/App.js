import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "./useInput";

const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const Page = styled.div`
  width: 360px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
`;

const MessageForm = styled.form`
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  margin-top: 8px;
  margin-right: 8px;
`;

const MessageTextArea = styled.textarea`
  margin-top: 8px;
  width: 100%;
  display: block;
`;

const MessageList = styled.div`
  margin-top: 16px;
`;

const MessageContainer = styled.div`
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 8px;

  & + & {
    margin-top: 8px;
  }
`;

const MessageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 4px;
`;

const MessageAuthor = styled.div`
  color: rgba(222, 25, 255, 0.6);
  font-size: 14px;
`;

const MessageTime = styled.div``;

const MessageBody = styled.div`
  margin-top: 16px;
  font-size: 14px;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: red;
`;

const MessageNickName = styled.input`
  margin-left: 5px;
`;

const Loading = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Message({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  );
}

Message.propTypes = {
  author: PropTypes.string,
  time: PropTypes.string,
  children: PropTypes.node,
};

function App() {
  const [messages, setMessages] = useState(null);
  const [messageApiError, setMessageApiError] = useState(null);
  const [postMessageError, setPostMessageError] = useState();
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false);
  const {
    value: textArea,
    setValue: setTextArea,
    handleChange: handleTextAreaChange,
  } = useInput();
  const {
    value: nickName,
    setValue: setNickName,
    handleChange: handleNickNameChange,
  } = useInput();

  const handleInputFocus = () => {
    setPostMessageError(null);
  };

  const fetchMessages = () => {
    return fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((message) => {
        setMessages(message);
      })
      .catch((err) => {
        setMessageApiError(err.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLoadingPostMessage) {
      return;
    }
    setIsLoadingPostMessage(true);
    fetch("https://student-json-api.lidemy.me/comments/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: nickName,
        body: textArea,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingPostMessage(false);
        if (data.ok === 0) {
          setPostMessageError(data.message);
          return;
        }
        setNickName("");
        setTextArea("");
        fetchMessages();
      })
      .catch((err) => {
        setIsLoadingPostMessage(false);
        setPostMessageError(err.message);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <Page>
      {isLoadingPostMessage && <Loading>Loading ...</Loading>}
      <Title>留言板</Title>
      <MessageForm onSubmit={handleFormSubmit}>
        暱稱 :
        <MessageNickName
          value={nickName}
          onChange={handleNickNameChange}
          onFocus={handleInputFocus}
        />
        <MessageTextArea
          value={textArea}
          onChange={handleTextAreaChange}
          onFocus={handleInputFocus}
          rows={10}
        />
        <SubmitButton>送出留言</SubmitButton>
        {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>}
      </MessageForm>
      {messageApiError && (
        <ErrorMessage>
          somthing went wrong . {messageApiError.toString()}
        </ErrorMessage>
      )}
      {messages && messages.length === 0 && <div>No Message</div>}
      <MessageList>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              author={message.nickname}
              time={new Date(message.createdAt).toLocaleString()}
            >
              {message.body}
            </Message>
          ))}
      </MessageList>
    </Page>
  );
}

export default App;
