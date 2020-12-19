import React from "react";
import SEO from "../components/seo";
import MainLayout from "../layout/MainLayout";
import Card from "../components/common/card";

const Bio = (): React.ReactElement => {
  return (
    <MainLayout
      pageTitle="My name is Crocodile"
      pageSubtitle="I make websites for fun!"
      avatar={true}
    >
      <SEO title="Bio" />
      <Card>
        <h1>This is Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          repudiandae tenetur asperiores doloribus esse natus vel repellat,
          dicta nostrum praesentium voluptate laudantium, culpa, nam ipsum sint.
          Assumenda, et. Error, praesentium.
        </p>
      </Card>
      <Card>
        <h1>This is Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          repudiandae tenetur asperiores doloribus esse natus vel repellat,
          dicta nostrum praesentium voluptate laudantium, culpa, nam ipsum sint.
          Assumenda, et. Error, praesentium.
        </p>
      </Card>
      <Card>
        <h1>This is Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          repudiandae tenetur asperiores doloribus esse natus vel repellat,
          dicta nostrum praesentium voluptate laudantium, culpa, nam ipsum sint.
          Assumenda, et. Error, praesentium.
        </p>
      </Card>
      <Card>
        <h1>This is Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          repudiandae tenetur asperiores doloribus esse natus vel repellat,
          dicta nostrum praesentium voluptate laudantium, culpa, nam ipsum sint.
          Assumenda, et. Error, praesentium.
        </p>
      </Card>
    </MainLayout>
  );
};

export default Bio;
