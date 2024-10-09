import Link from "next/link";
import React from "react";

export default function Dynamictest({
  params,
}: {
  params: { testId: string };
}) {
  console.log("params");
  return (
    <div>
      Test Id is {params.testId}
      <p>
        <Link href={`/test/${+params.testId + 1}`}>Next</Link>
      </p>
    </div>
  );
}
