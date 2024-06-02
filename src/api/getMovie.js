import client from "./client";

export const getMovie = async () => {
  try {
    const res = await client.get("/movie");

    console.log(res, "영화 조회 성공");

    return res;
  } catch (err) {
    console.log(err);
  }
};
