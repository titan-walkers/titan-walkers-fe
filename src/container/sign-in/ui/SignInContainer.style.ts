import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.gray5};
`;

export const LogoContainer = styled.div`
  margin-top: 30px;
  height: 120px;
  margin-bottom: 100px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

export const FormBox = styled.form`
  padding: 24px;
  width: 458px;
  min-height: 269px;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 10px;
`;

export const IdBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 5px 5px 0 0;
  padding: 5px 10px 5px 10px;
  height: 60px;
`;

export const IDLabel = styled.label<{ $isActive?: boolean }>`
  width: 360px;
  font-size: ${({ $isActive }) => ($isActive ? "12px" : "16px")};
  color: ${({ theme }) => theme.color.gray5};
  transition: 0.5s;
  cursor: pointer;
`;

export const Input = styled.input<{ $isActive?: boolean }>`
  width: 300px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.white};
  font-size: 20px;
`;

export const PwBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 5px 10px 5px 10px;
  height: 60px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.green2};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 5px;
`;

export const PWLabel = styled.label<{ $isActive?: boolean }>`
  width: 360px;
  font-size: ${({ $isActive }) => ($isActive ? "12px" : "16px")};
  color: ${({ theme }) => theme.color.gray5};
  transition: 0.5s;
  cursor: pointer;
`;

export const BottomTextRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 48px;
`;
export const IDFindText = styled.span`
  font-size: 16px;
  border-left: 1px solid ${({ theme }) => theme.color.gray4};
  border-right: 1px solid ${({ theme }) => theme.color.gray4};
  padding-left: 14px;
  padding-right: 14px;
  margin-left: 14px;
  margin-right: 14px;
`;
export const AdsBox = styled.div`
  width: 468px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.gray5};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamName = styled.span`
  color: ${({ theme }) => theme.color.black};
  margin-left: 10px;
  margin-right: 10px;
`;

export const Separator = styled.span`
  border-left: 1px solid ${({ theme }) => theme.color.gray4};
  margin-left: 14px;
  margin-right: 14px;
`;
export const NameRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
export const CopyrightRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 9px;
`;

export const DeleteButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray6};
  margin-right: 10px;
`;

export const DeleteButtonSpan = styled.span`
  margin-top: -3px;
  font-size: 13px;
`;

export const LabelAndInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.red1};
  font-size: 13px;
  margin-top: 20px;
`;
