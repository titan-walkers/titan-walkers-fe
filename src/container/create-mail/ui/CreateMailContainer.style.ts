import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 251px;
`;

export const UpWrapper = styled.div`
  display: flex;
  padding: 20px 30px 20px 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleLineWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

export const SendButtonLineWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
`;

export const SendButton = `
  border: 1px solid #03c75a;
  color: #03c75a;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  width: 64px;
  height: 28px;
`;

export const DropdownIcon = styled.span`
  font-size: 12px;
`;

export const ContentArea = styled.div`
  width: 100%;
`;

export const RecipientField = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const FieldLabel = styled.span`
  width: 160px;
  font-weight: bold;
  font-size: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const SubjectField = styled(RecipientField)``;

export const AttachmentArea = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const AttachmentButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const AttachmentInfo = styled.span`
  font-size: 12px;
  color: #888;
`;

export const MessageArea = styled.div`
  margin-top: 20px;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
`;
