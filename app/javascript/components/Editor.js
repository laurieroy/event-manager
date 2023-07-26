import react, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";

const Editor = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/events");

        if (!response.ok) throw Error(response.statusText);

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isError && <p>Something went wrong. check the console</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <EventList event={events} />
          <Routes>
            <Route path=":id" element={<Event events={events} />} />
          </Routes>
        </>
      )}
    </>
  );
};
export default Editor;
