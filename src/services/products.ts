import { BASE_API_URL } from "@/constants/api";
import { Racket, RacketResponse } from "@/types/racket";
import { cookies } from "next/headers";

interface Params {
  page?: string;
  limit?: string;
}

export async function getAll({
  page = "1",
  limit = "5",
}: Params): Promise<Racket[]> {
  const queryParams = new URLSearchParams({
    page,
    limit,
  }).toString();

  const res = await fetch(`${BASE_API_URL}/products?${queryParams}`);

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export async function getTop10(): Promise<Racket[]> {
  const res = await fetch(`${BASE_API_URL}/top-10`, {
    next: { tags: ["getTop10Rackets"] },
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export async function getById(id: string): Promise<Partial<RacketResponse>> {
  const cookieStore = await cookies();

  const res = await fetch(`${BASE_API_URL}/product/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (res.status === 404) {
    return {
      product: undefined,
    };
  }

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export async function getMetaById(
  id: string,
): Promise<Partial<RacketResponse>> {
  const res = await fetch(`${BASE_API_URL}/meta/product/${id}`);

  if (res.status === 404) {
    return {
      product: undefined,
    };
  }

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}
