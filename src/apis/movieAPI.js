import baseAPI from "./baseAPI";

export async function getBannerAPI() {
  try {
    const resp = await baseAPI.get("/quanlyphim/laydanhsachbanner");
    // resp = {
    //   ...
    //   data: {
    //     statusCode: 200,
    //     message: "Xử lý thành công!",
    //     content: [] | {} | ...
    //   }
    // }
    return resp.data.content;
  } catch (error) {
    // error = {
    //   response: {
    //     data: {
    //       statusCode,
    //       message,
    //       content: "Nội dung lỗi"
    //     }
    //   }
    // }
    throw error.response?.data?.content;
  }
}

export async function getMoviesAPI() {
  try {
    const resp = await baseAPI.get("/quanlyphim/laydanhsachphim", {
      params: {
        maNhom: "GP07",
      },
    });
    return resp.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}
