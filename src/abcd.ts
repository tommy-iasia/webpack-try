import { difference } from "lodash";

export function abcd() {
  return difference(
    ["abc", "bcd", "cde", "def", "efg", "fgh", "ghi"],
    ["efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm"]
  );
}
