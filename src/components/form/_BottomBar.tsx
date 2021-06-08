import { DarkButton, GrayButton, PurpleButton } from "../shared/_Buttons";
import styled from 'styled-components'

interface BottomBarProps {
  handleModal: () => void
  handleDraft: () => void
}

export function BottomBar(props: BottomBarProps) {
  const { handleModal, handleDraft } = props

  return (
    <BottomBarContainer>
      <DarkButton type="button" func={handleModal}>
        Discard
      </DarkButton>
      <GrayButton type="button" func={handleDraft}>
        Save as Draft
      </GrayButton>
      <PurpleButton type="submit">
        Save & Send
      </PurpleButton>
    </BottomBarContainer>
  )
}

const BottomBarContainer = styled.footer`
  padding: 2.2rem 24px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: var(--color-light-black);
  min-height: 9.1rem;
  margin-top: 8.8rem;
  width: 100%;

  button:nth-of-type(1) {
    width: 25%;
  }

  button:nth-of-type(2) {
    width: 35%;
  }

  button:nth-of-type(3) {
    width: 34.5%;
  }

  @media screen and (min-width: 630px) {
    margin-top: 4.7rem;
    background: transparent;
    padding: 2.2rem 0;
    justify-content: flex-end;

    button:nth-of-type(1) {
      width: 10.5rem;
      margin-right: auto;
    }

    button:nth-of-type(2) {
      width: 14rem;
      margin-right: 1.2rem
    }

    button:nth-of-type(3) {
      width: 13.5rem;
    }
  }
`
