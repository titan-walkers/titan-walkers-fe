"use client";
import Link from "next/link";
import styled, { css } from "styled-components";

export const ProfileDetailWrapper = styled.div<{ $modalState: boolean }>`
  position: absolute;
  top: 56px;
  left: auto;
  right: 10px;
  width: 316px;
  padding: 16px;
  margin: 0;
  background-color: #fff;
  border: 0;
  box-shadow: 0px 2px 5px 1px rgba(107, 119, 172, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  z-index: 80;

  &::after {
    position: absolute;
    top: -6px;
    right: 16px;
    content: "";
    width: 14px;
    height: 6px;
    background: url("images/common/icon-tooltip-arrow.png") no-repeat;
    z-index: 60;
  }

  ${({ $modalState }) =>
    $modalState
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;

export const ProfileContents = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;

export const ProfileInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.div`
  color: #666;
  font-size: 14px;

  span {
    font-weight: bold;
    color: #222;
  }
`;

export const SignOutButton = styled.button`
  width: 53px;
  height: 20px;
  padding-left: 1px;
  font-size: 12px;
  line-height: 21px;
  color: #666;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: rgba(255, 255, 255, 0.05);
`;

export const Email = styled(Link)`
  font-family: tahoma;
  color: #666;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
