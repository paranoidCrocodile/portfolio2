import React from "react";
import MainLayout from "../layout/MainLayout";
import SEO from "../components/seo";

const NotFoundPage: React.FC = (): React.ReactElement => (
  <MainLayout>
    <div>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </div>
  </MainLayout>
);

export default NotFoundPage;
