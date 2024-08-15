"use client";
import styled from "styled-components";

export const ProfileWrapper = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  overflow: hidden;
`;

export const ProfileName = styled.div`
  height: 28px;
  color: #666;
  font-size: 11px;
  line-height: 28px;
  padding-left: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
