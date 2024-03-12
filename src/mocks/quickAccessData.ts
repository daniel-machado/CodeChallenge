import { Alert } from "react-native"

export interface quickAccessType {
  id: string;
  title: string;
  icon: string;
  action(): void;
}

export const quickAccessData = [
  {
    id: '1',
    title: 'Pagamento',
    //icon: 'fin-payment',
    icon: 'logo-amazon',
    action: () => Alert.alert('navigateToPayment()'),
  },
  {
    id: '2',
    title: 'Pix',
    //icon: 'fin-pix',
    icon: 'logo-behance',
    action: () =>  Alert.alert('navigateToPix(PixPaymentCentral)'),
  },
  {
    id: '3',
    title: 'Pagar fatura do cartão',
    //icon: 'fin-card',
    icon: 'logo-bitbucket',
    action: () => Alert.alert('navigateToInvoicePay()'),
  },
  {
    id: '4',
    title: 'Darf',
    //icon: 'fin-payment',
    icon: 'logo-bitcoin',
    action: () => Alert.alert('navigateToDarf()'),
  },
  {
    id: '5',
    title: 'GPS',
    //icon: 'fin-payment',
    icon: 'logo-closed-captioning',
    action: () => Alert.alert('navigateToGPS()'),
  },
  {
    id: '6',
    title: 'BB Pay',
    //icon: 'fin-pay-receive',
    icon: 'logo-codepen',
    action: () => Alert.alert('navigateToBBPay()'),
  },
]; 