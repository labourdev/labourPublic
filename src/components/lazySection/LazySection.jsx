import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const LazySection = ({ Section }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={<div>...</div>}>
          <Section />
        </Suspense>
      )}
    </div>
  );
};

export default LazySection;
