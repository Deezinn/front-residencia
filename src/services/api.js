import axios from "axios";

const url = "http://localhost:8000";

export const getErrors = async ({ id }) => {
  const res = await axios.get(`${url}/api/documents/${id}`);
  return res.data;
};

export const postDocument = async (arquivoImg, tipo) => {
  const formData = new FormData();
  formData.append("image", arquivoImg);
  formData.append("documentClassification", tipo);
  const res = await axios.post(`${url}/images/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  console.log(res.data);
  return res.data;
};
