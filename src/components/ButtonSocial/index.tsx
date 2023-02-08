import React, { ReactComponentElement } from 'react';
import { Button, Icone, Title } from './style';

import { Fontisto } from '@expo/vector-icons'; 

interface props  {
    title: string,
    icon: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocial: React.FC<props> = ({title, icon, ...rest}) => {

    
  return (
    <Button {...rest} >
        <Icone name={icon} />
            <Title>
                {title}
            </Title>
    </Button>
  );
}

export default ButtonSocial;