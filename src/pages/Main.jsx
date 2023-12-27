import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundary";
import Loading from "../components/Loading";

const Products = React.lazy(() => import("../components/Products"));

function Main() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Main;
