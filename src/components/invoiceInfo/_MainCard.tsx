import styled from 'styled-components'
import { formatDate } from '../../utils/formatters'
import { PaymentCard } from './_PaymentCard'

interface MainCardProps {
  id: string
  data: {
    description: string
    senderAddress: {
      street: string
      city: string
      postCode: string
      country: string
    }
    createdAt: string
    paymentDue: string
    clientName: string
    clientAddress: {
      street: string
      city: string
      postCode: string
      country: string
    }
    clientEmail: string
    items: Array<{
      name: string
      quantity: number
      total: number
      price: number
    }>
  }
}

const Card = styled.main`
  padding: 2.4rem 24px;
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  background: var(--color-light-black);
  margin-top: 1.6rem;

  address {
    font-style: normal;
  }

  span, p {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: var(--color-grayish-purple);
    display: block;
  }
`

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Id = styled.div`
  h1 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: var(--color-white);
  }

  strong {
    color: var(--color-dark-purple);
  }

  p {
    margin-top: 0.5rem;
  }
`

const SenderAddress = styled.address`
  margin: 3rem 0;

  span + span {
    margin-top: 0.5rem;
  }
`

const BottomInfo = styled.div`
  strong {
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 2rem;
    color: var(--color-white);
  }

`

const DatesClientInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`

const Dates = styled.div`
  span {
    margin-bottom: 1.2rem;
  }

  .payment-due {
    margin-top: 3.2rem;
  }
`

const ClientInfo = styled.div`
  & > span {
    margin-bottom: 1.2rem;
  }

  div {
    margin-top: 0.8rem;

    span + span {
      margin-top: 0.5rem;
    }
  }
`

const ClientEmail = styled.div`
  span {
    margin-bottom: 1.2rem;
  }
`

export function MainCard({ data, id }: MainCardProps) {
  const items = data.items;

  return (
    <Card>
      <TopInfo>
        <Id>
          <h1>
            <strong>#</strong>
            {id}
          </h1>
          <p>{data.description}</p>
        </Id>
        <SenderAddress>
          <span>{data.senderAddress.street}</span>
          <span>{data.senderAddress.city}</span>
          <span>{data.senderAddress.postCode}</span>
          <span>{data.senderAddress.country}</span>
        </SenderAddress>
      </TopInfo>
      <BottomInfo>
        <DatesClientInfo>
          <Dates>
            <span className="invoice-date">Invoice Date</span>
            <strong>{formatDate(data.createdAt)}</strong>
            <span className="payment-due">Payment Due</span>
            <strong>{formatDate(data.paymentDue)}</strong>
          </Dates>
          <ClientInfo>
            <span>Bill to</span>
            <strong>{data.clientName}</strong>
            <div>
              <span>{data.clientAddress.street}</span>
              <span>{data.clientAddress.city}</span>
              <span>{data.clientAddress.postCode}</span>
              <span>{data.clientAddress.country}</span>
            </div>
          </ClientInfo>
        </DatesClientInfo>
        <ClientEmail>
          <span>Sent to</span>
          <strong>{data.clientEmail}</strong>
        </ClientEmail>
      </BottomInfo>
      <PaymentCard items={items} />
    </Card>
  )
}