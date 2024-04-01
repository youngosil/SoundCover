import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import Header from '../components/Header';

const MyAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    // 사용자의 앨범을 가져오기 위해 백엔드에 요청을 보냅니다.
    fetchUserAlbums();
  }, [user]); // user가 변경될 때마다 다시 불러옵니다.

  const fetchUserAlbums = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/myalbum?owner_id=${user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('앨범을 가져오지 못했습니다.');
      }

      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error('앨범을 가져오는 동안 오류가 발생했습니다:', error.message);
    }
  };

  return (
    <div>
      <Header />
      <h1>My albums</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {albums.map((album) => (
          <img key={album.id} src={album.url} alt={`앨범 ${album.id}`} style={{ margin: '10px', width: '200px', height: '200px' }} />
        ))}
      </div>
    </div>
  );
};

export default MyAlbums;
