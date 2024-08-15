import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { useModal } from "./useModal";

describe("useModal : 모달에 대한 열고, 닫고 이벤트를 확인합니다.", () => {
  it("초기 상태가 닫힌 상태여야 합니다.", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.modalState).toBe(false);
  });

  it("openModal 함수 호출 시 모달이 열려야 합니다.", () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openModal();
    });
    expect(result.current.modalState).toBe(true);
  });

  it("closeModal 함수 호출 시 모달이 닫혀야 합니다.", () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openModal();
      result.current.closeModal();
    });
    expect(result.current.modalState).toBe(false);
  });
});
