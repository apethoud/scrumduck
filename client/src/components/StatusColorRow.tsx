import styled from 'styled-components';

const Background = styled.div`
  margin-bottom: 6px;
  background: blue;
`

const TranslucentOverlay = styled.div`
  margin-left: 8px;
  padding: 12px;
  background: #fff;
  opacity: 0.8;
`

export default function StatusColorRow({ children }) {
  return (
    <Background>
      <TranslucentOverlay>
        {children}
      </TranslucentOverlay>
    </Background>
  )
}