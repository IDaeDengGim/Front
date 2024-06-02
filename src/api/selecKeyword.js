import client from "./client";

export const selecKeyword = async () => {
  try {
    const res = await client.get("/keyword");

    console.log(res, "키워드 조회 성공");

    return res;
  } catch (err) {
    console.log(err);
  }
};
