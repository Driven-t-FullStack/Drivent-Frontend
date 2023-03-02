import styled from 'styled-components';

function HotelOption({ title, price, setSelected, selected, index, setHotelPrice, hotel, setHotel }) {
  console.log(selected, 'selecionado');
  function handleClick(index) {
    if (!selected || selected !== index) {
      setSelected(index);
      if (index === 1) {
        setHotel(true);
        setHotelPrice(price);
      } else {
        setHotel(false);
        setHotelPrice(0);
      }
    } else {
      setSelected(false);
      setHotel(false);
      setHotelPrice(0);
    }
  }

  return (
    <Container onClick={() => handleClick(index)} selected={selected} index={index}>
      {title}
      <span>R${price}</span>
    </Container>
  );
}

const Container = styled.button`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.selected === props.index ? '#FFEED2' : '#FFFFFF')};
  span {
    font-size: 14px;
    color: #898989;
  }
`;

export default HotelOption;
