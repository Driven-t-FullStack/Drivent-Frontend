import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Form/Button';
import useToken from '../../../hooks/useToken';
import { postRoom } from '../../../services/roomsApi';
import Room from './Room';

export default function Rooms({ roomLoading, rooms, chosenRoomId, setChosenRoomId, setBookingIsDone }) {
  const [loading, setLoading] = useState(false);
  const token = useToken();

  async function bookRoom() {
    setLoading(true);
    const body = { roomId: chosenRoomId };
    alert(body.roomId);
    try {
      await postRoom(body, token);
      setLoading(false);
      setBookingIsDone(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <Container>
      <h2>Ótima Pedida, Agora escolha seu quarto: </h2>
      {roomLoading ? (
        <h2>Loading...</h2>
      ) : (
        <RoomsBox>
          {rooms.Rooms.map((room) => (
            <Room room={room} key={room.id} setChosenRoomId={setChosenRoomId} chosenRoomId={chosenRoomId} />
          ))}
        </RoomsBox>
      )}
      {chosenRoomId !== null && (
        <Button onClick={bookRoom} style={{ marginBottom: '125px' }} disabled={loading}>
          Reservar quarto
        </Button>
      )}
    </Container>
  );
}

const Container = styled.section`
  margin-top: 52px;
  h2 {
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    margin-bottom: 30px;
  }
`;
const RoomsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 45px;
`;
