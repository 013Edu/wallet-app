import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/Header';

import Payment from "../../../assets/payaments.png"
import PayOut from "../../../assets/payuot.png"
import TopUp from "../../../assets/topup.png"
import Transfer from "../../../assets/transfer.png"

import { transaction } from '../../../utils/transaction';

import {
  Card,
  Container,
  ContentCard,
  ContentText1,
  ContentText2,
  TextView1,
  TextView2,
  Body,
  IconTransfer,
  IconPayment,
  IconPayOut,
  IconTopUp,
  Title,

} from './style';

const Carteira: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContentCard>
        <Card>
          <ContentText1>
            <TextView1>Valor total</TextView1>
            <TextView2>$ 1.234</TextView2>
          </ContentText1>
          <ContentText2>
            <TextView1>Cartão</TextView1>
            <TextView2>Mabank</TextView2>
          </ContentText2>
        </Card>
      </ContentCard>
      <Body>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <IconTransfer source={Transfer} />
          <Title>Transferencia</Title>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconPayment source={Payment} />
          <Title>Pagamentos</Title>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconPayOut source={PayOut} />
          <Title>Pagamento</Title>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconTopUp source={TopUp} />
          <Title>+ Opcoes</Title>
        </TouchableOpacity>
      </Body>
      <FlatList
        data={transaction}
        renderItem={({ item }) => (
          <View>
          
          </View>
        )}
      />
    </Container>
  )
}

export default Carteira;