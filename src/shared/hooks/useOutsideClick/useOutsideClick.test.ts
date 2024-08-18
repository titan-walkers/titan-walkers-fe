import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { useOutsideClick } from "./useOutsideClick";

describe("useOutsideClick", () => {
  let callback: () => void;
  let container: HTMLDivElement;

  beforeEach(() => {
    callback = vi.fn();
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("콜백이 외부 클릭 시 호출되어야 합니다.", () => {
    const { result } = renderHook(() => useOutsideClick(callback));
    const element = document.createElement("div");
    if (result.current) {
      result.current.current = element;
    }
    container.appendChild(element);

    fireEvent.mouseDown(document.body);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("콜백이 내부 클릭 시 호출되지 않아야 합니다.", () => {
    const { result } = renderHook(() => useOutsideClick(callback));
    const element = document.createElement("div");
    if (result.current) {
      result.current.current = element;
    }
    container.appendChild(element);

    fireEvent.mouseDown(element);
    expect(callback).not.toHaveBeenCalled();
  });

  it("컴포넌트 언마운트 시 이벤트 리스너가 제거되어야 합니다.", () => {
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");
    const { unmount } = renderHook(() => useOutsideClick(callback));

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    );
  });
});
