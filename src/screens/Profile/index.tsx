import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import GoBack from '../../components/GoBack';

const Profile: React.FC = () => {
    return (
        <>
            <GoBack />
            <Container>
                <Text>User</Text>
            </Container>
        </>
    )
}

export default Profile;