import React from "react";
import { UserMailProps } from "./UserMail";

export default function UserMailMessage(props: UserMailProps) {
  const { currentElement } = props;
  return <div className="pt-4">{currentElement?.message}</div>;
}
