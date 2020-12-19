import React from "react";
import MainLayout from "../layout/MainLayout";
import SEO from "../components/seo";
import Card from "../components/common/card";

const page = {
  pageTitle: "This is a mockup page",
  pageSubtitle: "Not intended to be shown in production",
  avatar: true,
};

const Mockup: React.FC = (): React.ReactElement => (
  <MainLayout {...page}>
    <SEO title="Mockup" />
    <Card>
      <h1>This is title</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        optio, eius dolore labore aliquid facilis facere consectetur eligendi?
        Accusamus incidunt beatae delectus esse molestiae dolor. Voluptatibus
        fugiat beatae ex tempore.
        <h2
          style={{
            marginTop: "1rem",
          }}
        >
          List
        </h2>
        <ul>
          <li>List-item</li>
          <li>List-item</li>
          <li>List-item</li>
        </ul>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        nisi sit eum. Earum provident temporibus iure quidem cumque quae
        blanditiis nesciunt ex reprehenderit repellat et inventore ea, excepturi
        dolore autem.
      </p>
    </Card>
    <Card>
      <h1>This is title</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        optio, eius dolore labore aliquid facilis facere consectetur eligendi?
        Accusamus incidunt beatae delectus esse molestiae dolor. Voluptatibus
        fugiat beatae ex tempore.
        <h2
          style={{
            marginTop: "1rem",
          }}
        >
          List
        </h2>
        <ul>
          <li>List-item</li>
          <li>List-item</li>
          <li>List-item</li>
        </ul>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        nisi sit eum. Earum provident temporibus iure quidem cumque quae
        blanditiis nesciunt ex reprehenderit repellat et inventore ea, excepturi
        dolore autem.
      </p>
    </Card>
    <Card>
      <h1>This is title</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        optio, eius dolore labore aliquid facilis facere consectetur eligendi?
        Accusamus incidunt beatae delectus esse molestiae dolor. Voluptatibus
        fugiat beatae ex tempore.
        <h2
          style={{
            marginTop: "1rem",
          }}
        >
          List
        </h2>
        <ul>
          <li>List-item</li>
          <li>List-item</li>
          <li>List-item</li>
        </ul>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        nisi sit eum. Earum provident temporibus iure quidem cumque quae
        blanditiis nesciunt ex reprehenderit repellat et inventore ea, excepturi
        dolore autem.
      </p>
    </Card>
  </MainLayout>
);

export default Mockup;
