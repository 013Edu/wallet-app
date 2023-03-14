import React from 'react';

import logo from "../../assets/luffy.jpg"
import { 
    Container,
    ContentHeader,
    AppName,
    Status,
    Avatar,

} from './style';

 interface iHeader {
  appName: string
  textLeft?: boolean
  avatarRight?: boolean
}

const Header: React.FC<iHeader> = ({appName, avatarRight, textLeft}) => {
  return (
    <Container>
        <ContentHeader>
            <AppName>{appName}</AppName>
           {textLeft && (
             <Status>Ativo</Status>
           )}
        </ContentHeader>
        {avatarRight && (
              <Avatar source={logo} />
        )}
    </Container>
  )
}

export default Header;