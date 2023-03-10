import styled from 'styled-components';
import Button from '../../../components/Form/Button';
import { HotelPreview } from './style';

export default function BookingInformation({ booking, setUpdateBooking, setBookingIsDone }) {
  function determineRoomType(capacity) {
    if (capacity === 1) {
      return 'Single';
    } else if (capacity === 2) {
      return 'Double';
    } else if (capacity === 3) {
      return 'Triple';
    }
  }

  function determineWhoIsTheRoom() {
    const occupiedVacancies = booking?.Room.Booking.length;

    return `Vocês e mais ${occupiedVacancies - 1}`;
  }

  function updateBooking() {
    setUpdateBooking(true);
    setBookingIsDone(false);
  }

  return (
    <Container>
      <HotelPreview isChosen={true}>
        <img src={booking.Room.Hotel.image} alt="hotel_picture" />
        <h1> {booking.Room.Hotel.name} </h1>
        <h2>Quarto Reservado: </h2>
        <p>{`${booking.Room.name} (${determineRoomType(booking?.Room.capacity)})`}</p>
        <h2>Pessoas no seu quarto: </h2>
        <p>{determineWhoIsTheRoom()}</p>
      </HotelPreview>

      <Button onClick={updateBooking}>TROCAR DE QUARTO</Button>
    </Container>
  );
}

const Container = styled.div`
  div {
    margin-bottom: 40px;
  }
`;
