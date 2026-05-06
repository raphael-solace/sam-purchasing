import { useEffect, useState, useRef } from "react";
import { generatePriceTick, generateNewsEvent, generateCommentary } from "../lib/mockData";

export default function useEventStream(maxEvents = 200, commodityType = "raw_materials") {
  const [events, setEvents] = useState([]);
  const [connected, setConnected] = useState(true);
  const typeRef = useRef(commodityType);
  typeRef.current = commodityType;

  useEffect(() => {
    setConnected(true);

    const priceInterval = setInterval(() => {
      const tick = generatePriceTick(typeRef.current);
      if (tick) {
        setEvents((prev) => {
          const next = [tick, ...prev];
          return next.length > maxEvents ? next.slice(0, maxEvents) : next;
        });
      }
    }, 3000);

    const newsInterval = setInterval(() => {
      const news = generateNewsEvent(typeRef.current);
      setEvents((prev) => {
        const next = [news, ...prev];
        return next.length > maxEvents ? next.slice(0, maxEvents) : next;
      });
    }, 8000);

    const commentaryInterval = setInterval(() => {
      const comment = generateCommentary(typeRef.current);
      setEvents((prev) => {
        const next = [comment, ...prev];
        return next.length > maxEvents ? next.slice(0, maxEvents) : next;
      });
    }, 15000);

    return () => {
      clearInterval(priceInterval);
      clearInterval(newsInterval);
      clearInterval(commentaryInterval);
    };
  }, [maxEvents]);

  return { events, connected };
}
