import { BASE_API_URL } from "@/constants/api";
import { Racket, RacketResponse } from "@/types/racket";

interface Params {
    page?: string;
    limit?: string;
}

export async function getAll({ page = "1", limit = "5" }: Params): Promise<Racket[]> {
    const queryParams = new URLSearchParams({
        page,
        limit,
    }).toString();

    const res = await fetch(`${BASE_API_URL}/products?${queryParams}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    return res.json();
}

export async function getTop10(): Promise<Racket[]> {
    const res = await fetch(`${BASE_API_URL}/top-10`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}

export async function getById(id: string): Promise<Partial<RacketResponse>> {
    const res = await fetch(`${BASE_API_URL}/product/${id}`, {
        cache: "no-store",
    });

    if (res.status === 404) {
        return {
            product: undefined
        }
    }

    if (!res.ok) throw new Error("Failed to fetch product");

    return res.json();
}