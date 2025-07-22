import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";

const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    console.log("first, formData", image);
    const response = await Axios({
      ...SummaryApi.uploadImage,
      data: formData,
    });
    console.log("first, response", response);

    return response;
  } catch (error) {
    return error;
  }
};

export default uploadImage;
