import React from 'react';

import { 
    Container,
    ContentHeader,
    AppName,
    Status,
    Avatar,

} from './style';

const Header: React.FC = () => {
  return (
    <Container>
        <ContentHeader>
            <AppName>Carteira</AppName>
            <Status>Ativo</Status>
        </ContentHeader>
            <Avatar source={{uri:'https://github.com/013Edu.png'}} />
    </Container>
  )
}

export default Header;