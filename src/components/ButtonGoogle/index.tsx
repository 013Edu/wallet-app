import React from 'react';
import { Button, Icone, Title } from './style';

import Google from "../../assets/Google.png"

interface props  {
    title: string
}

const ButtonGoogle: React.FC<props> = ({title, ...rest}) => {

    
  return (
    <Button {...rest} >
        <Icone
            source={Google}
            resizeMode={'contain'}
            />
            <Title>
                {title}
            </Title>
    </Button>
  );
}

export default ButtonGoogle;