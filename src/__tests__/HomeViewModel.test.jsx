import { renderHook } from "@testing-library/react";
import HomeViewModel from "../pages/Home/view.model";
import { it, expect, describe } from "vitest";

describe("HomeViewModel", () => {
    it("should return data", () => {
        const { result } = renderHook(() => HomeViewModel());
        expect(result.current.filterData).toBeDefined();
    });
})

