import React from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumPage() {
    const { userId, albumId } = useParams();
    console.log(userId, albumId, 'params');
    return (
        <div>
            Hello {albumId}
        </div>
    )
}
