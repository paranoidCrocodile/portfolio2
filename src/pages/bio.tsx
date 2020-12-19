import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import MainLayout from "../layout/MainLayout";
import Card from "../components/common/card";

const Bio = (): React.ReactElement => {
  return (
    <MainLayout
      pageTitle="My name is Crocodile"
      pageSubtitle="I make websites for fun!"
    >
      <Card>This is a card</Card>
    </MainLayout>
  );
};

export default Bio;
