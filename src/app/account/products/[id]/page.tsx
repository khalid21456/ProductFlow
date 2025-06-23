import React from "react";
import { Product } from "@/types/product";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  return (
    <h1>
      Detail of {id}
    </h1>
  );
}
