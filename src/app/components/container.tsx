import React from "react";
import type { ReactElement, ReactNode } from "react";

type ContainerProps = {
  children: ReactElement | ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <section className="container">{children}</section>;
}
