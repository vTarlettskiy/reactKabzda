import { Select } from "./Select";
import { action } from "@storybook/addon-actions";
import { useMemo, useState } from "react";
import { v1 } from "uuid";

export default {
  title: "SelectExample",
  component: Select,
};

export const WithValue = () => {
  const [value, setValue] = useState("2");

  const [items, setItems] = useState([
    { id: v1(), title: "Minsk", value: "1", population: 1000000 },
    { id: v1(), title: "Moscow", value: "2", population: 10000000 },
    { id: v1(), title: "Berlin", value: "3", population: 20000000 },
    { id: v1(), title: "New York", value: "4", population: 70000000 },
  ]);

  const resultItems = useMemo(() => {
    // Фильтруем массив items и возвращаем результат
    return items.filter((i) => i.population >= 20000000);
  }, [items]); // Зависим от items

  return (
    <>
      <Select value={value} onChange={setValue} items={resultItems} />
    </>
  );
};

// export const WithoutValue = () => {
//   const [value, setValue] = useState(null);
//
//   return (
//     <>
//       <Select
//         onChange={setValue}
//         value={value}
//         items={[
//           { title: "Moscow", value: "1" },
//           { title: "Minsk", value: "2" },
//           { title: "New York", value: "3" },
//           { title: "Paris", value: "4" },
//         ]}
//       />
//     </>
//   );
// };
