"use client";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  top: 55px;
  background-color: #f6f7fa;
  border-color: #ddd;
  position: absolute;
  top: 50px;
  bottom: 0;
  right: auto;
  width: 251px;
  border-right: 1px solid rgba(48, 48, 56, 0.15);
`;

export const SidebarMenuSection = styled.div`
  width: 100%;
  padding: 16px 18px 0;
`;

export const SidebarButton = styled.button`
  padding: 12px 0;
  width: 100%;
  line-height: 14px;
  text-align: center;
  background-color: #03c75a;
  border-radius: 5px;
  letter-spacing: -0.5px;
  font-size: 16px;
  color: #fff;
`;
