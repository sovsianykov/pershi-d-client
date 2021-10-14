import React, { useCallback, useState } from "react";
import {
  FormGroup,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@material-ui/core";
import styles from "./PostForm.module.scss";
import { format } from "date-fns";
import { postData } from "../../api/postData";
import CustomButton from "../Button/Button";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const changeMessageHandler = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [setMessage]
  );
  const changeTitleHandler = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );
  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const currentPost = {
        title: title,
        message: message,
        date: format(Date.now(), "hh/mm - EEEE - dd/MM/yy"),
      };
      if (title&&message) {
          postData(currentPost);
          console.log(currentPost);
      }
        setMessage("");
        setTitle("");
    },
    [message, title]
  );

  return (
    <FormGroup className={styles.formContainer}>
      <InputLabel htmlFor="title" className={styles.labelForm}>
        Титул
        <Input
          className={styles.inputField}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={changeTitleHandler}
        />
      </InputLabel>
      <InputLabel htmlFor="message" className={styles.labelForm}>
        Завдання
        <TextareaAutosize
          className={styles.inputArea}
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={changeMessageHandler}
        />
      </InputLabel>
      <CustomButton variant="contained" type="submit" onClick={onSubmitHandler}>
        Додати
      </CustomButton>
    </FormGroup>
  );
};

export default PostForm;
