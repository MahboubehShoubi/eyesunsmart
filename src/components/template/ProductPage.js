"use client";

import { useSearchParams } from "next/navigation";

function ProductPage() {
  const searchParams = useSearchParams();

  const first = searchParams.get("first");
  const second = searchParams.get("second");
  const third = searchParams.get("third");
  console.log({ first, second, third });

  return <div>Product Page</div>;
}

export default ProductPage;
