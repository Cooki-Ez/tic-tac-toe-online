import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";
import {Fragment, useState} from "react";

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

export function UiFieldSelect(){
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div>
      //TODO
    </div>
  );
}
