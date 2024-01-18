import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import axios from "axios"; // Importa axios si es necesario para obtener datos
import config from "../../src/config.json";

export const PostInfo = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostById = async () => {
            try {
                const res = await axios.get(config.apiUrl);
                const foundPost = res.data.find(p => p._id === id); // Busca el post por ID
                setPost(foundPost);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPostById();
    }, [id]);

    if (!post || post.latitud === undefined || post.longitud === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div>
           
                <MapContainer center={{ lat: post.latitud, lng: post.longitud }} zoom={13}>
                    <TileLayer
                        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{ lat: post.latitud, lng: post.longitud }}>
                        <Popup>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </Popup>
                    </Marker>
                </MapContainer>
           
        </div>
    );
};