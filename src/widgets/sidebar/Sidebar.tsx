import React from "react";

import * as S from "./Sidebar.style";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.SidebarMenuSection>
        <S.SidebarButton>메일쓰기</S.SidebarButton>
      </S.SidebarMenuSection>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
