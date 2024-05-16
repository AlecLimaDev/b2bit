import { renderHook } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import api from "../services/api";

describe("should return fetch Data", () => {
    it("should return data", () => {
        const { result } = renderHook(() => api());
        expect(result.current.finally).toBeDefined();
    });
})

