export const fetchData = async (userName: string, status = 200) => {
  try {
    const response = await fetch(
      `https://qiita.com/api/v2/items?page=1&per_page=20&query=+user%3A${userName}`
    );
    if (!response.ok) {
      throw new Error("err");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getQiitaData = async (userName: string) => {
  try {
    const data = await fetchData(userName);
    // data.length > 0 ? console.log(data) : console.error("NOT FOUND");
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// getQiitaData("f0lst");
