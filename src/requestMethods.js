import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzFjN2ZmODUzNzRhZDNiNTMyMjgwZiIsImlzYWRtaW4iOnRydWUsImlhdCI6MTY0MDYyMDYyNCwiZXhwIjoxNjQxMDUyNjI0fQ.v60McHhaq-f3Oo-Hg4bAv1zzqBG4ERl_Bi0xE1AqW0o";



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});