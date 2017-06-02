import io from 'socket.io-client';
import { hostname, port } from '../config';

export const socket = io(`http://${hostname}:${port}`);
