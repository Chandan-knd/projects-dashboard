import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "4iwpxelpwrq7",
  accessToken: import.meta.env.VITE_API_KEY,
  environment: "master",
});

export const useFetchProject = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const id = item.sys.id;
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;

        return { id, title, url, img };
      });

      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
